<template>
    <div class="treatment">
        <h1 class="h3">Обращения</h1>

        <Table v-on:click-row="showDetails($event)" :inputData="tableData" />

        <div class="text-center">
            <v-dialog v-model="dialog" width="717">

                <v-card>
                    <v-card-text>
                        <h1 class="head">Обращение № 00256 от 27.01.2020</h1>
                        <v-row>
                            <v-col cols="3">
                                <span class="sub-head">Тема обращения:</span><br/>
                                <span class="head-info">Получение бонусов</span>
                            </v-col>
                            <v-col cols="3">
                                <span class="sub-head">Статус:</span><br/>
                                <span class="head-info">Завершён</span>
                            </v-col>

                            <v-col cols="11" offset="1">
                                <v-card>
                                    <v-card-text>
                                    <v-row justify="space-between">
                                        <v-col cols="3"><span class="msg-head">Текст обращения:</span></v-col>
                                        <v-col cols="3"><span class="msg-head-date">12.03.2020 в 16:35</span></v-col>

                                            <p class="msg">
                                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                                деятельности требуют от нас анализа направлений прогрессивного развития.
                                                Разнообразный и богатый опыт новая модель организационной деятельности
                                                позволяет выполнять важные задания по разработке соответствующий условий
                                                активизации.
                                            </p>

                                    </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="11">
                                <v-card>
                                    <v-row justify="space-between">
                                        <v-col cols="3"><span class="msg-head">Текст обращения:</span></v-col>
                                        <v-col cols="3"><span class="msg-head-date">12.03.2020 в 16:35</span></v-col>
                                        <v-card-text>
                                            <p class="msg">
                                                Повседневная практика показывает, что укрепление и развитие внутренней
                                                структуры однозначно фиксирует необходимость благоприятных перспектив.
                                                В своём стремлении повысить качество жизни, они забывают, что постоянное
                                                информационно-пропагандистское обеспечение нашей деятельности играет
                                                важную роль в формировании глубокомысленных рассуждений. Сложно сказать,
                                                почему некоторые особенности внутренней политики формируют глобальную
                                                экономическую сеть и при этом - разоблачены.
                                            </p>
                                        </v-card-text>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row justify="end">
                            <v-col cols="5">
                                <div class="mx-2">
                                    <v-btn depressed>Создать новое обращение</v-btn>
                                </div>
                            </v-col>
                            <v-col cols="2">
                                <div class="mx-2">
                                    <v-btn depressed>Закрыть</v-btn>
                                </div>
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

    export default {
        name: "Treatment",
        components: {Table},
        data: () => ({
            dialog: false,
            tableData: {
                headers: [
                    {text: 'Дата', align: 'start', value: 'id'},
                    {text: 'Тема обращения', value: 'calories'},
                    {text: 'Статус', value: 'fat'}
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
        }
    }
</script>

<style scoped>
    .h3 {
        padding-bottom: 28px;
    }
    .head {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .sub-head {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .head-info {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .msg-head {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .msg-head-date {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        text-align: right;
        color: #2B2A29;
        opacity: 0.5;
    }
    .msg {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
</style>
