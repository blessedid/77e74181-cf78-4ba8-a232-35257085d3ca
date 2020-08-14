<template>
    <div>
        <MenuHeader/>
        <v-main>
            <v-row no-gutters>
                <v-col cols="3" class="l-block">
                    <SelectType v-if="step === 'selectType'"/>
                    <Params
                            v-if="step === 'setParamDelivery'"
                            v-on:selected-address="addressToMap($event)"
                            v-on:remove-address="removeAddress($event)"
                    />
                    <ChoiceTariff
                            v-if="step === 'selectTariff'"
                            :input-addresses="delivery.addresses"
                            :input-delivery-type="delivery.type"
                            :input-delivery-details="delivery.details"
                            v-on:come-back="comeBack($event)"
                    />
                </v-col>
                <v-col cols="9">
                    <div v-if="step === 'selectTariff'" class="over">
                        <v-row>
                            <v-col offset="3" cols="9">
                                <v-row align="center" justify="center">
                                    <v-col cols="3">
                                        <v-card>
                                            <div class="mx-5 div-card">
                                                <h1 class="text-center h3">Эконом</h1>
                                                <v-img class="mx-auto" src="http://via.placeholder.com/62x70" max-width="62" max-height="70"/>
                                                <p class="text2 img-padding">Рейтинг курьера — 4,0</p>
                                                <p class="text2">Страховка — 50 ₽</p>
                                                <p class="text2">Скидка — 50₽</p>
                                                <p class="text2">Стоимость доставки — 348₽</p>
                                                <p class="text2">Оформление в транспортной — 150₽</p>
                                                <p class="text2">Термосумка — 0₽</p>

                                                <v-row align="end" class="price" no-gutters>
                                                    <v-col class="text2" cols="6">Доставка:</v-col>
                                                    <v-col class="text2 text-end" cols="6">282 ₽</v-col>
                                                    <v-col class="text2" cols="6">Скидка:</v-col>
                                                    <v-col class="text2 text-end" cols="6"> -141 ₽</v-col>
                                                    <v-col class="h3" cols="6">Итого:</v-col>
                                                    <v-col class="h3 text-end" cols="6">141 ₽</v-col>
                                                </v-row>
                                                <v-btn large block tile outlined class="mt-2">Заказать доставку</v-btn>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                    <div id="map"></div>
                </v-col>
            </v-row>

            <v-navigation-drawer
                    absolute
                    permanent
                    right
                    class="r-block"
                    v-if="step === 'setParamDelivery'"
            >
                <template v-slot:prepend>
                    <v-container>
                        <v-row align="start">
                            <v-col cols="12">
                                <h3>{{ delivery.type.text }}</h3>
                            </v-col>
                        </v-row>
                        <v-row align="end" style="height: 150px;position: absolute;bottom: 0;padding-bottom: 22px" no-gutters>
                            <v-col cols="12">
                                <v-divider></v-divider>
                            </v-col>
                            <v-col cols="6" class="text1 pl-3">Доставка:</v-col>
                            <v-col cols="6" class="text-end text1 pr-3">282 ₽</v-col>
                            <v-col cols="6" class="text1 pl-3">Скидка:</v-col>
                            <v-col cols="6" class="text-end text1 pr-3"> -141 ₽</v-col>
                            <v-col cols="6" class="h3 pl-3">Итого:</v-col>
                            <v-col cols="6" class="text-end h3 pr-3">141 ₽</v-col>
                        </v-row>
                    </v-container>
                </template>

            </v-navigation-drawer>
        </v-main>
    </div>
</template>

<script>
    import MenuHeader from "./MenuHeader";
    import SelectType from "./order/SelectType";
    import Params from "./order/Params";
    import ChoiceTariff from "./order/ChoiceTariff";
    import { mapMutations } from 'vuex';

    export default {
        name: "OrderCreation",
        components: {MenuHeader, SelectType, Params, ChoiceTariff},
        data: () => ({
            map: {},
            geoObjectCount: 0,
        }),
        methods: {
            ...mapMutations(['updateMapAddresses', 'addMapAddresses', 'removeMapAddresses', 'clearMapState']),
            comeBack(data) {
                this.delivery.addresses = data.addresses;
                this.delivery.details = data.details;
                this.step = data.step;
            },
            initMap() {
                this.map = new window.ymaps.Map("map", {
                    center: [55.76, 37.64],
                    zoom: 12,
                    controls: ['zoomControl'],
                });

                this.map.events.add('click', function (e) {
                    let coords = e.get('coords');
                    this.getAddressOfCoords(coords).then(data => {
                        if (this.geoObjectCount < this.mapAddressesCount) {
                            // console.log(data.GeocoderMetaData.text, coords, this.geoObjectCount, this.delivery.addresses.length);
                            console.log(this.mapAddresses);
                            let item = this.mapAddresses.find(item => item.id === this.geoObjectCount);
                            if (item) {
                                this.updateMapAddresses({
                                    address: data.GeocoderMetaData.text,
                                    coords: coords,
                                    id: item.id
                                });
                            } else {
                                this.addMapAddresses({
                                    address: data.GeocoderMetaData.text,
                                    coords: coords,
                                    id: this.geoObjectCount
                                });
                            }

                            this.setGeoObject(coords, this.geoObjectCount);
                        }
                    })
                }, this);
            },
            getAddressOfCoords(coords) {
                return window.ymaps.geocode(coords)
                    .then((res) => {
                        return res.geoObjects.get(0).properties.get('metaDataProperty');
                        // return res.geoObjects.get(0).getAddressLine();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            setGeoObject(coords, id = false) {
                let myGeoObject = new window.ymaps.Placemark(
                    coords,
                    {},
                    {draggable: true}
                );

                myGeoObject.events.add('dragend', function (e) {
                    let coordsObject = e.get('target').geometry.getCoordinates();
                    this.changeAddress(coordsObject, id);
                }, this);

                this.map.geoObjects.add(myGeoObject);

                this.geoObjectCount++;
            },
            changeAddress(coords, id) {
                this.getAddressOfCoords(coords).then(data => {
                    this.updateMapAddresses({
                        address: data.GeocoderMetaData.text,
                        coords: coords,
                        id: id
                    });
                })
            },
            addressToMap(data) {
                console.log(this.mapAddresses[data.id]);
                if (this.mapAddresses[data.id])
                {
                    window.ymaps.geoQuery(this.map.geoObjects).searchIntersect(this.map).each(function(pm) {
                        if (pm.geometry.getCoordinates() === this.mapAddresses[data.id].coords) {
                            pm.geometry.setCoordinates(data.coords);
                        }
                    }, this);

                    this.updateMapAddresses(data);
                } else {
                    this.setGeoObject(data.coords, data.id);
                    this.addMapAddresses(data);
                }
            },
            removeAddress(data) {
                console.log(data);
                if (!data || !this.mapAddresses[data.id]) return;

                window.ymaps.geoQuery(this.map.geoObjects).searchIntersect(this.map).each(function(pm) {
                    if (pm.geometry.getCoordinates() === data.address.pos) {
                        this.map.geoObjects.remove(pm);
                        this.removeMapAddresses(data.id);
                        this.geoObjectCount--;
                    }
                }, this);
            }
        },
        computed: {
            step() {
                return this.$store.getters.getStep;
            },
            delivery() {
                return this.$store.getters.getDelivery;
            },
            mapAddresses() {
                return this.$store.getters.getMapAddresses;
            },
            mapAddressesCount() {
                return this.$store.getters.getMapAddressesCount;
            }
        },
        mounted() {
            let yandexMapScript = document.createElement('SCRIPT');
            yandexMapScript.setAttribute('src', 'https://api-maps.yandex.ru/2.1/?apikey=cda2b49d-fcfb-41fc-a237-b33c9b8ec4be&lang=ru_RU');
            yandexMapScript.setAttribute('async', '');
            yandexMapScript.setAttribute('defer', '');
            yandexMapScript.setAttribute('id', 'yandex-maps');
            window.document.head.appendChild(yandexMapScript);
            yandexMapScript.onload = () => {
                window.ymaps.ready(this.initMap);
            };
        },
        beforeDestroy() {
            delete window.ymaps;
        },
        beforeMount() {
            this.$store.subscribe((mutation) => {
                // console.log(mutation);
                if (['clearParamsAndDelivery'].indexOf(mutation.type) !== -1) {
                    window.ymaps.geoQuery(this.map.geoObjects).searchIntersect(this.map).each(function(pm) {
                        this.map.geoObjects.remove(pm);
                    }, this);

                    this.clearMapState();
                    this.geoObjectCount = 0;
                }
            });
        }
    }
</script>

<style scoped>
    .div-card {
        padding-top: 22px;
        padding-bottom: 31px;
    }
    .price {
        padding-top: 74px;
    }
    .img-padding {
        padding-top: 30px;
    }

    .r-block {
        height: calc(100vh - 94px);
    }

    .l-block {
        z-index: 2;
        max-height: calc(100vh - 94px);
        overflow-x: scroll;
    }

    .over {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
    }

    #map {
        width: 100%;
        height: calc(100vh - 94px);
    }

    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
    }

    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }

    ::-webkit-scrollbar-thumb {
        background: #787878;
        border: 0px none #ffffff;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #787878;
    }

    ::-webkit-scrollbar-thumb:active {
        background: #000000;
    }

    ::-webkit-scrollbar-track {
        background: #ffffff;
        border: 0px none #ffffff;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-track:hover {
        background: #ffffff;
    }

    ::-webkit-scrollbar-track:active {
        background: #d1d1d1;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
</style>
