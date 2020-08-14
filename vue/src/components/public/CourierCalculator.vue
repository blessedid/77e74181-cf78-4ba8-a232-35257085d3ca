<template>
    <div class="calc-com">
        <h1 class="text-center calc-head">Сколько можно заработать?</h1>
        <v-card
                class="mx-auto"
                :max-width="1400"
        >
            <v-card-text v-bind:style="{}">
                <v-card-text>
                    <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                            class="form"
                            v-if="!resultCalc"
                    >
                        <v-row>

                            <v-col cols="12" sm="6" md="3">
                                <v-select :items="days" filled label="Рабочих дней в месяц"
                                          :rules="rules"></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select :items="orders" filled label="Заказов в день"
                                          :rules="rules"></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select :items="specialOrders" filled label="Спец. заказов в месяц"
                                          hint="Например, доставка в аэропорт"
                                          persistent-hint
                                          :rules="rules"></v-select>
                            </v-col>

                            <v-col cols="12" sm="6" md="3">
                                <v-select :items="rating" filled label="Рейтинг курьера"
                                          :rules="rules"></v-select>
                            </v-col>

                            <v-col cols="12" class="my-0">
                                <v-checkbox
                                        v-model="checkbox"
                                        label="Чаевые"
                                ></v-checkbox>
                            </v-col>

                            <v-row no-gutters>
                                <v-col cols="5" offset="1">
                                    <a href="">Проверить самостоятельно</a>
                                </v-col>
                                <v-col cols="5">
                                    <div class="text-end">
                                        <v-btn text @click="getResultCalc(resultCalc, $event)">Узнать сумму заработка
                                            <v-icon large>trending_flat</v-icon>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>

                        </v-row>
                    </v-form>
                    <v-row v-if="resultCalc" justify="center">
                        <v-col cols="9">
                                    <span class="text-calc">
                                        Ваш заработок составит за месяц:
                                        <span class="calc-sum">35 420 ₽</span>
                                    </span>
                        </v-col>
                        <v-col cols="4">
                            <div class="text-center">
                                <v-btn tile large color="#E67217" dark>Забрать свои деньги</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "CourierCalculator",
        data: () => ({
            days: [...Array(31).keys()],
            orders: [...Array(50).keys()],
            specialOrders: [...Array(50).keys()],
            rating: [...Array(6).keys()],
            valid: true,
            checkbox: true,
            rules: [v => !!v || 'Поле обязательно для заполнения'],
            resultCalc: false
        }),
        methods: {
            getResultCalc(data, event) {
                console.log(event, this, data);
                // if (event) event.preventDefault();
                this.resultCalc = true;
            }
        }
    }
</script>

<style scoped>
    .calc-com {
        padding-top: 200px;
    }

    .calc-head {
        padding-bottom: 59px;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }

    .text-calc {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }

    .calc-sum {
        padding-left: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 122px;
        line-height: 130%;
        color: #2B2A29;
    }

    .v-card__text {
        padding: 0;
    }
    .form {
        padding: 60px 100px 60px;
    }
</style>
