<template>
    <div>
        <v-col cols="12">
            <h3 class="h3">Заказать доставку</h3>
            <v-tabs v-model="tabs" fixed-tabs class="text1-btn">
                <v-tabs-slider></v-tabs-slider>
                <v-tab href="#mobile-tabs-5-1" class="primary--text">
                    Выберите тип доставки
                </v-tab>

                <v-tab href="#mobile-tabs-5-2" class="primary--text">
                    Скопировать заказ
                </v-tab>
            </v-tabs>
        </v-col>

        <v-tabs-items v-model="tabs">
            <v-tab-item value="mobile-tabs-5-1">
                <v-row justify="center" class="text1">
                    <v-col cols="4" @click.stop="selectType(item)" class="text-center delivery-type" v-for="(item, i) of deliveryType" :key="i">
                        <v-row align="center" justify="center" style="padding-bottom: 10px">
                            <v-img src="http://via.placeholder.com/65x65" max-height="65" max-width="65" />
                        </v-row>
                        {{ item.text }}
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item value="mobile-tabs-5-2">
                sdfsdf
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
    export default {
        name: "SelectType",
        data: () => ({
            tabs: null,
            deliveryType: [
                {type: 'courierDelivery', icon: '', text: 'Курьерская доставка'},
                {type: 'bulkMailing', icon: '', text: 'Массовая рассылка'},
                {type: 'cafeDelivery', icon: '', text: 'Доставка для кафе'},
                {type: 'foodDelivery', icon: '', text: 'Доставка продуктов'},
                {type: 'longDistanceDelivery', icon: '', text: 'Междугородняя доставка'},
                {type: 'courierRent', icon: '', text: 'Аренда курьера'},
                {type: 'deliveredJail', icon: '', text: 'Доставка в тюрьму'},
            ]
        }),
        methods: {
            selectType(type) {
                this.$store.commit('setStep', 'setParamDelivery');
                this.$store.commit('setDeliveryType', type);
                // this.setStep('setParamDelivery');
                // this.setDeliveryType(type);
            }
        }
    }
</script>

<style scoped>
    .delivery-type {
        transition: background-color .55s ease-out;
    }
    .delivery-type:hover {
        background: #E67217;
    }
    .h3 {
        padding-top: 40px;
        padding-bottom: 20px;
    }
</style>
