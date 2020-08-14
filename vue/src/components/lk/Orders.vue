<template>
    <div>
        <h1 class="head">Мои заказы</h1>
        <v-container>
            <v-row justify="space-between" style="padding-bottom: 28px">
                <v-col cols="4">
                    <span class="htext">Активные заказы на карте</span>
                </v-col>
                <v-col cols="4">
                    <span class="htext">Активные заказы на карте</span>
                </v-col>
            </v-row>

            <Table v-on:click-row="showDetails($event)" v-on:action-delete="removeItem($event)" :inputData="tableData" />
        </v-container>

        <div class="text-center">
            <v-dialog v-model="dialog" width="1200">
                <v-card>
                    <v-card-title class="headline">
                        <v-row no-gutters justify="end">
                            <v-col cols="2" style="text-align: end;">
                                <v-btn icon @click="dialog = false"><v-icon>clear</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <v-card-text>
                        <v-row>
                            <v-col cols="4">
                                <p class="model-head">Детали заказа</p>

                                <span class="text2">Откуда:</span>
                                <p class="text2-btn">Россия, Москва, Новинский бульвар, 16с2</p>

                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <span class="text2">Дата</span>
                                        <p class="text2-btn">27.01.2020</p>
                                    </v-col>
                                    <v-col cols="6">
                                        <span class="text2">Время</span>
                                        <p class="text2-btn">19:00 - 21:30</p>
                                    </v-col>
                                </v-row>

                                <span class="text2">Статус:</span>
                                <p class="text2-btn">Посещён</p>

                                <span class="text2">Куда:</span>
                                <p class="text2-btn">Россия, Москва, Новинский бульвар, 16с2</p>
                                <v-row no-gutters>
                                    <v-col cols="4" class="text2-btn">27.01.2020</v-col>
                                    <v-col cols="4" class="text2-btn">19:00 - 21:30</v-col>
                                    <v-col cols="4" class="text2-btn">Посещён</v-col>
                                </v-row>

                                <span class="text2">Комментарий адресу:</span>
                                <p class="text2-btn">Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют от нас анализа направлений прогрессивного развития. </p>

                                <v-row no-gutters style="padding-top: 49px">
                                    <v-col cols="4">
                                        <span class="text2">Вес:</span>
                                        <p class="text2-btn">До 1 кг.</p>
                                    </v-col>
                                    <v-col cols="4">
                                        <span class="text2">Способ оплаты:</span>
                                        <p class="text2-btn">Нал. при получении</p>
                                    </v-col>
                                    <v-col cols="4">
                                        <span class="text2">Предмет:</span>
                                        <p class="text2-btn">Документы</p>
                                    </v-col>
                                </v-row>

                                <ul style="list-style: '- ';padding-top: 23px">
                                    <li class="text2-btn">Хрупкий груз</li>
                                    <li class="text2-btn">Оформление в трансп.</li>
                                    <li class="text2-btn">Выкуп товара</li>
                                </ul>
                            </v-col>
                            <v-col cols="8">
                                <yandex-map
                                        id="ya-map"
                                        :dragable="false"
                                        :scrollZoom="false"
                                        :zoom="10"
                                        :coords="[54.82896654088406,39.831893822753904]"
                                ></yandex-map>

                                <v-row no-gutters style="padding-top: 72px">
                                    <v-col cols="10" offset="2">
                                        <v-row no-gutters>
                                            <v-col cols="3">
                                                <p class="text2">Сумма перевода:</p>
                                                <p class="price">0 ₽</p>
                                            </v-col>
                                            <v-col cols="3">
                                                <p class="text2">Стоимость предмета:</p>
                                                <p class="price">0 ₽</p>
                                            </v-col>
                                            <v-col cols="3">
                                                <p class="text2">Стоимость выкупа:</p>
                                                <p class="price">100 ₽</p>
                                            </v-col>
                                            <v-col cols="3">
                                                <p class="text2">Стоимость доставки:</p>
                                                <p class="price">240 ₽</p>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="4">
                                                <v-btn block tile outlined>Редактировать</v-btn>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-btn block tile outlined>Копировать заказ</v-btn>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-btn block tile outlined>Скачать квитанцию</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
    import Table from "./Table";
    import { yandexMap } from 'vue-yandex-maps';

    export default {
        name: "Orders",
        components: { Table, yandexMap },
        data: () => ({
            dialog: false,
            tableData: {
                headers: [
                    {text: '№', align: 'start', value: 'id'},
                    {text: 'Создан', value: 'calories'},
                    {text: 'Сроки', value: 'fat'},
                    {text: 'Стоимость', value: 'carbs'},
                    {text: 'Предмет', value: 'protein'},
                    {text: 'Статус', value: 'iron'},
                    {text: '', value: 'action'},
                ],
                desserts: [
                    {
                        id: 1,
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: '1%',
                        action: []
                    },
                    {
                        id: 2,
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: '1%',
                        action: []
                    },
                    {
                        id: 3,
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: '7%',
                        action: []
                    },
                    {
                        id: 4,
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: '8%',
                        action: []
                    },
                    {
                        id: 5,
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: '16%',
                        action: []
                    },
                    {
                        id: 6,
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: '0%',
                        action: []
                    },
                    {
                        id: 7,
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                        action: []
                    },
                    {
                        id: 8,
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                        action: []
                    },
                    {
                        id: 9,
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                        action: []
                    },
                    {
                        id: 10,
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
                        action: []
                    },
                ],
            }
        }),
        methods: {
            showDetails(e) {
                console.log(e);
                this.dialog = true;
            },
            removeItem(e) {
                alert('Delete' + e);
            }
        }
    }
</script>

<style scoped>
    #ya-map {
        height: 100%;
        max-height: 481px;
    }
    .head {
        padding-bottom: 28px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .htext {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
    }

    .model-head {
        padding-bottom: 28px;
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .price {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #E67217;
    }
</style>
