<template>
    <div>
        <SelectCity :inputData="dialogCity" />

        <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group>
            <v-btn value="left">Пеший курьер</v-btn>
            <v-btn value="center">Курьер на авто</v-btn>
        </v-btn-toggle>

        <h3><v-btn icon large @click="comeBack"><v-icon>keyboard_arrow_left</v-icon></v-btn> Укажите маршрут</h3>

        <v-row>
            <v-form ref="form" :v-model="valid" lazy-validation>
                <v-col>
                    <v-card class="mx-3 mb-2" v-for="(item, i) of addresses" :key="i">
                        <v-card-text class="text1">
                            <v-row no-gutters class="mb-1">
                                <v-col cols="6">
                                    <p class="text--primary">{{ item.title }}</p>
                                </v-col>
                                <v-col cols="5">
                                    <div class="text--primary">Москва</div>
                                </v-col>
                                <v-col cols="1" v-if="item.type === 'toAddress' && addresses.length > 2">
                                    <div @click="removeAddress(item, i)">
                                        <v-icon class="text-end">clear</v-icon>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row no-gutters>
                                <v-col cols="9">
                                    <v-text-field v-model="item.address.value" :rules="validRequired" label="" style="display: none" filled></v-text-field>
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                    class="mx-1 rounded-0"
                                                    v-model="item.address.value"
                                                    label="Адрес"
                                                    v-on="on"
                                                    :rules="validRequired"
                                                    v-on:input="search($event)"
                                                    :loading="isLoading"
                                                    filled
                                            ></v-text-field>
                                        </template>
                                        <v-list v-if="addressesList.length > 0">
                                            <v-list-item v-for="(item, index) in addressesList" :key="index" class="mx-1"
                                                         @click="choiceAddress(item, i)">
                                                <v-list-item-title>{{ item.text }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-col>
                                <v-col cols="3">
                                    <v-text-field v-model="item.flat.value" class="mx-1 rounded-0" label="Кв/оф" filled></v-text-field>
                                </v-col>

                                <v-col cols="7">
                                    <v-text-field v-model="item.phone.value" class="mx-1 rounded-0" :rules="validPhone" label="Телефон" filled></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-text-field v-model="item.additionalNumber.value" class="mx-1 rounded-0" label="Доб." filled></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-menu
                                            ref="menu1"
                                            :return-value.sync="date"
                                            :close-on-content-click="false"
                                            transition="scale-transition"
                                            offset-y
                                    >
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field
                                                    v-model="item.dateTime.formattingDate"
                                                    label="Дата и время"
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    @blur="item.dateTime.value = parseDate(item.dateTime.formattingDate)"
                                                    filled
                                                    class="mx-1 rounded-0"
                                                    :rules="validRequired"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                                :min="format(new Date(), 'yyyy-MM-dd')"
                                                v-model="item.dateTime.value"
                                                @change="date(item.dateTime.value, i)"
                                                no-title
                                                scrollable
                                                @input="item.dateTime.show = false"
                                        >
                                            <v-select :items="intervalTime(i, 'from')" v-model="item.dateTime.timeStart" label="Standard"></v-select>
                                            <v-select :items="intervalTime(i, 'to')" v-model="item.dateTime.timeEnd" label="Standard"
                                            ></v-select>
                                        </v-date-picker>
                                    </v-menu>
                                </v-col>

                                <v-col cols="6">
                                    <p class="text--primary" @click="item.contactPerson.show = true"
                                       v-if="!item.contactPerson.show">Контактное лицо</p>
                                    <v-text-field v-if="item.contactPerson.show" class="mx-1 rounded-0" v-model="item.contactPerson.value" label="Контактное лицо" filled></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <p class="text--primary" @click="item.comment.show = true" v-if="!item.comment.show">Комментарий</p>
                                    <v-text-field v-if="item.comment.show" class="mx-1 rounded-0" v-model="item.comment.value" label="Комментарий" filled></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <p class="text--primary" @click="item.redeem.show = true" v-if="!item.redeem.show">Выкупить в ₽</p>
                                    <v-text-field v-if="item.redeem.show" class="mx-1 rounded-0" v-model="item.redeem.value" label="Выкупить в ₽" filled></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <p class="text--primary" @click="item.extensionNumber.show = true" v-if="!item.extensionNumber.show">Внутренний номер</p>
                                    <v-text-field v-if="item.extensionNumber.show" class="mx-1 rounded-0" v-model="item.extensionNumber.value" label="Внутренний номер" filled></v-text-field>
                                </v-col>
                                <v-col cols="6" v-if="item.type === 'toAddress'">
                                    <span @click.stop="addShippingAddress" class="text--primary">Добавить адрес</span>
                                </v-col>
                                <v-col cols="6" v-if="item.type === 'toAddress'">
                                    <v-checkbox class="text--primary" v-model="item.iRecipient" label="Я получатель"></v-checkbox>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-row style="padding-top: 22px">
                        <v-col cols="7">
                            <v-btn tile outlined class="text2-btn ml-3">Оптимизировать маршрут</v-btn>
                        </v-col>
                        <v-col cols="5">Для экономии средств на доставке</v-col>
                    </v-row>

                    <h3 class="h3 detail ml-6">Укажите детали отправления</h3>

                    <v-card class="mx-3 mb-2">
                        <v-card-text>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field label="Ценность груза" class="rounded-0" v-model="details.cargoValue" filled></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select :items="items" class="rounded-0" v-model="details.cargoWeight" filled label="Вес груза"></v-select>
                                </v-col>
                            </v-row>
                            <v-checkbox class="text--primary mt-0 pt-0" v-model="details.cancellationSuretyAgreement" label="Отказываюсь от договора поручительства"></v-checkbox>
                            <div v-if="deliveryType.type === 'courierDelivery' || deliveryType.type === 'cafeDelivery'">
                                <h4>Дополнительно:</h4>
                                <v-checkbox class="text--primary my-0" v-model="details.fragileCargo" label="Хрупкий груз"></v-checkbox>
                                <v-checkbox class="text--primary my-0" v-model="details.transportCompany" label="Оформление отправления в транспортной компании"></v-checkbox>
                                <v-checkbox class="text--primary my-0" v-model="details.redemptionGoods" label="Выкуп товара"></v-checkbox>
                                <v-checkbox class="text--primary my-0" v-model="details.submissionTaxReports" label="Сдача налоговой отчётности и отчётности в госорганах"></v-checkbox>
                                <v-checkbox class="text--primary my-0" label="Наличие термосумки" v-model="details.thermalBag"></v-checkbox>
                            </div>
                            <div v-if="deliveryType.type === 'foodDelivery' || deliveryType.type === 'deliveredJail'">
                                <v-textarea filled label="Перечень продуктов" class="rounded-0" v-model="details.listProducts" :placeholder="pre"></v-textarea>
                                <p>Будьте внимательны при формировании списка! При необходимости указывайте бренд продукции</p>
                                <v-text-field label="Предпочитаемые магазины" class="rounded-0" v-model="details.preferredStores" filled></v-text-field>
                            </div>
                            <div v-if="deliveryType.type === 'longDistanceDelivery'">
                                <h4>Размеры груза:</h4>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field label="Длина, см" class="rounded-0" v-model="details.dimensions.len" filled></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field label="Ширина, см" class="rounded-0" v-model="details.dimensions.width" filled></v-text-field>
                                    </v-col>
                                    <v-col cols="4">
                                        <v-text-field label="Высота, см" class="rounded-0" v-model="details.dimensions.heights" filled></v-text-field>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-if="deliveryType.type === 'bulkMailing'">
                                <v-row>
                                    <v-col cols="6">
                                        <v-btn depressed>Скачать шаблон</v-btn>
                                    </v-col>
                                    <v-col cols="6">
                                        <v-btn depressed>Загрузить файл</v-btn>
                                    </v-col>
                                </v-row>
                                <p>Инструкция по загрузке базы адресов</p>
                            </div>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field label="Укажите E-mail" class="rounded-0" v-model="details.email" filled></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select :items="items" filled label="Способ оплаты" class="rounded-0" v-model="details.paymentMethod"></v-select>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <div class="text-center py-9">
                        <v-btn depressed large @click="sendForm">Выбрать тариф</v-btn>
                    </div>
                </v-col>
            </v-form>
        </v-row>
    </div>
</template>

<script>
    import { format, intervalToDuration, add, parse } from 'date-fns';
    import { mapMutations, mapState } from 'vuex';
    import SelectCity from "../public/SelectCity";

    export default {
        name: "Params",
        components: {SelectCity},
        props: [],
        data: () => ({
            format, intervalToDuration, add, parse,
            defaultValueAddress: {
                address: {show: true, value: '', pos: ''},
                flat: {show: true, value: ''},
                phone: {show: true, value: ''},
                additionalNumber: {show: true, value: ''},
                dateTime: {show: false, value: format(new Date(), 'yyyy-MM-dd'), formattingDate: format(new Date(), 'dd.MM.yyyy'), timeStart: 'now', timeEnd: 'any'},
                contactPerson: {show: false, value: ''},
                comment: {show: false, value: ''},
                redeem: {show: false, value: ''},
                extensionNumber: {show: false, value: ''},
                iRecipient: false
            },
            numberDeliveryAddresses: 2,
            valid: false,
            isLoading: false,
            itemAddresses: [],

            timePicker: null,

            dialogCity: {show: false},

            details: {
                cargoWeight: null,
                cargoValue: null,
                cancellationSuretyAgreement: false,
                fragileCargo: false,
                transportCompany: false,
                redemptionGoods: false,
                submissionTaxReports: false,
                thermalBag: false,
                listProducts: null,
                preferredStores: null,
                dimensions: {
                    len: null,
                    width: null,
                    heights: null,
                },
                email: null,
                paymentMethod: null
            },

            text: '',
            // addresses: [],
            items: ['qwe'],
            pre: 'Вносите по одной позиции в строку:\n\n' +
                '- Хлеб — 1 шт\n' +
                '- Сахар — 1 кг...',

            validPhone: [
                v => !!v || 'Поле обятельно для заполнения',
                v => (/^\+7[0-9]{10,12}$/.test(v)) || 'error',
            ],
            validRequired: [
                v => !!v || 'Поле обятельно для заполнения',
            ],
        }),
        methods: {
            ...mapMutations(['setAddress', 'setStep', 'clearParamsAndDelivery', 'setDetails', 'addMapAddresses', 'setMapAddressesCount']),
            addShippingAddress() {
                this.addresses.push({
                    id: this.numberDeliveryAddresses,
                    type: 'toAddress',
                    title: 'Адрес доставки №' + this.numberDeliveryAddresses + ':',
                    ...this.copyObject(this.defaultValueAddress)
                });
                this.addMapAddresses({
                    address: '',
                    coords: [],
                    id: this.numberDeliveryAddresses
                });

                this.numberDeliveryAddresses++
                this.setMapAddressesCount(this.mapAddressesCount + 1);
            },
            copyObject(obj) {
                var nobj = {};
                for (let key in obj) {
                    if (typeof obj[key] === 'object') {
                        nobj[key] = this.copyObject(obj[key]);
                    } else {
                        nobj[key] = obj[key];
                    }
                }
                return nobj;
            },
            sendForm() {
                if (this.$refs.form.validate()) {
                    this.setStep('selectTariff');
                    this.setAddress(this.addresses);
                    this.setDetails(this.details);
                    // this.$emit('param-send', {addresses: this.addresses, details: this.details, step: 'selectTariff'});
                }
            },
            comeBack() {
                this.setStep('selectType');
                this.clearParamsAndDelivery();
            },
            search(val) {
                // console.log(val);
                if (this.isLoading || !val.trim() || val.trim().length < 3) return;
                this.isLoading = true;

                const url = "https://geocode-maps.yandex.ru/1.x/?apikey=cda2b49d-fcfb-41fc-a237-b33c9b8ec4be&geocode=" + val + "&format=json";

                const options = {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                };

                fetch(url, options)
                    .then(response => response.text())
                    .then(result => {
                        this.itemAddresses = [];
                        JSON.parse(result).response.GeoObjectCollection.featureMember.forEach(item => {
                            // console.log(item.GeoObject.metaDataProperty.GeocoderMetaData.text);
                            this.itemAddresses.push({
                                text: item.GeoObject.metaDataProperty.GeocoderMetaData.text,
                                pos: item.GeoObject.Point.pos
                        })
                        });
                    })
                    .catch(error => {
                        console.log("error", error);
                    })
                    .finally(() => (this.isLoading = false));
            },
            choiceAddress(val, i) {
                // this.addresses[i].address = {show: true, value: val.text, pos: val.pos};
                let c = val.pos.split(' ');

                this.$emit('selected-address', {
                    address: val.text,
                    coords: [Number(c[1]), Number(c[0])],
                    id: this.addresses[i].id
                });
            },
            formatDate (date) {
                if (!date) return null;

                const [year, month, day] = date.split('-');
                return `${day}.${month}.${year}`
            },
            parseDate (date) {
                if (!date) return null;

                const [day, month, year] = date.split('.');
                return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            },
            date (val, i) {
                this.addresses[i].dateTime.formattingDate = this.formatDate(val);
            },
            intervalTime(key, type) {
                // console.log(this.addresses[key]);
                var x = 30, //minutes interval
                    times = [{
                        text: type === 'from' ? 'Сейчас' : 'Не важно',
                        value: type === 'from' ? 'now' : 'any'
                    }], // time array
                    d = new Date(),
                    distance = intervalToDuration({end: new Date(this.addresses[key].dateTime.value), start: new Date()}),
                    tt; // start time

                if (distance.days > 0 && type === 'from') {
                    tt = 0;
                } else if (type === 'to' && Object.values(this.addresses[key].dateTime.timeStart).length && this.addresses[key].dateTime.timeStart !== 'now'){
                    let t = add(parse(this.addresses[key].dateTime.timeStart, 'HH:mm', new Date("1970-01-01")), {minutes: 30});
                    tt = (t.getHours() * 60) + t.getMinutes();
                } else if (d.getMinutes() > 30) {
                    tt = (d.getHours()+1)*60;
                }else {
                    tt = d.getHours()*60+30
                }

                for (let i=0;tt<24*60; i++) {
                    let hh = Math.floor(tt/60), // getting hours of day in 0-24 format
                        mm = (tt%60); // getting minutes of the hour in 0-55 format
                    times.push({
                        text: ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2),
                        value: ("0" + (hh % 24)).slice(-2) + ':' + ("0" + mm).slice(-2)
                    });
                    tt = tt + x;
                }

                times.push("23:59");

                return times;
            },
            removeAddress(item, id) {
                this.$emit('remove-address', {address: item.address, id: id});
                this.addresses.splice(id, 1);
                this.setMapAddressesCount(this.mapAddressesCount - 1);
                this.numberDeliveryAddresses--;
            }
        },
        computed: {
            addressesList() {
                return this.itemAddresses;
            },
            ...mapState({
                addresses: state => state.order.delivery.addresses,
                mapAddresses: state => state.map.mapAddresses,
                deliveryType: state => state.order.delivery.type,
                mapAddressesCount: state => state.map.mapAddressesCount
            }),
        },
        watch: {
        },
        beforeMount() {
            this.$store.subscribe((mutation) => {
                // console.log(mutation);
                if (['addMapAddresses', 'updateMapAddresses'].indexOf(mutation.type) !== -1) {
                    let item = this.addresses.find(element => element.id === mutation.payload.id);
                    item.address = {show: true, value: mutation.payload.address, pos: mutation.payload.coords};
                }
            });

            if (!this.addresses.length) {
                if (['courierDelivery', 'longDistanceDelivery', 'courierRent', 'bulkMailing', 'cafeDelivery'].indexOf(this.deliveryType.type) !== -1) {
                    this.addresses.push({
                        id: 0,
                        type: 'fromAddress',
                        title: this.deliveryType.type === 'courierRent' ? 'Куда приехать:' : 'Откуда забираем:',
                        ...this.copyObject(this.defaultValueAddress)
                    });
                    this.setMapAddressesCount(this.mapAddressesCount + 1);
                }

                if (['courierDelivery', 'foodDelivery', 'longDistanceDelivery', 'cafeDelivery', 'deliveredJail'].indexOf(this.deliveryType.type) !== -1) {
                    this.addresses.push({
                        id: 1,
                        type: 'toAddress',
                        title: 'Куда везём:',
                        ...this.copyObject(this.defaultValueAddress)
                    });
                    this.setMapAddressesCount(this.mapAddressesCount + 1);
                }
            }
        },
    }
</script>

<style scoped>
    .h3.detail {
        padding-top: 60px;
        padding-bottom: 10px;
    }
</style>
