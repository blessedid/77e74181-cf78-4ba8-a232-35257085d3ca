<template>
    <v-dialog v-model="inputData.show" max-width="633">
        <v-card>

            <v-card-text>
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="6">
                            <strong>Россия</strong>
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <ul>
                                        <li>Москва</li>
                                        <li>Воронеж</li>
                                        <li>Иркутск</li>
                                        <li>Красноярск</li>
                                        <li>Новокузнецк</li>
                                        <li>Ноябрьск</li>
                                        <li>Орёл</li>
                                    </ul>
                                </v-col>
                                <v-col cols="6">
                                    <ul>
                                        <li>Смоленск</li>
                                        <li>Ставрополь</li>
                                        <li>Сургут</li>
                                        <li>Улан-Удэ</li>
                                        <li>Чебоксары</li>
                                        <li>Челябинск</li>
                                    </ul>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="6">
                            <strong>Казахстан</strong>
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <ul>
                                        <li>Нур-Султан (Астана)</li>
                                        <li>Актау</li>
                                        <li>Алматы</li>
                                        <li>Атырау</li>
                                        <li>Караганда</li>
                                    </ul>
                                </v-col>
                                <v-col cols="6">
                                    <ul>
                                        <li>Кызылорда</li>
                                        <li>Павлодар</li>
                                        <li>Уральск</li>
                                        <li>Шымкент</li>
                                    </ul>
                                </v-col>
                            </v-row>
                            <strong>Беларусь</strong>
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <ul>
                                        <li>Минск</li>
                                    </ul>
                                </v-col>
                                <v-col cols="6">
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "SelectCity",
        props: ['inputData']
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
    }
</style>
