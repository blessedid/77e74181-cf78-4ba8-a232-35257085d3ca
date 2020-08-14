<template>
    <div>
        <h1 class="head">Партнёрская программа</h1>
        <v-row>
            <v-col cols="8">
                <v-row>
                    <v-col cols="6">
                        <h3 class="text1-btn">Ваша партнёрская ссылка:</h3>
                        <span class="text1 color" @click="copeToClipboard('https://garantbox.ru/promo/GB8206E0')">https://garantbox.ru/promo/GB8206E0</span>
                    </v-col>
                    <v-col cols="6">
                        <h3 class="text1-btn">Ваш партнёрский промо-код:</h3>
                        <span class="text1">GB8206E0</span>
                    </v-col>

                    <v-col cols="12" class="text2">
                        Делитесь этой ссылкой или промо-кодом с вашими друзьями и знакомыми. И создайте для себя новый пассивный источник дохода
                    </v-col>

                    <v-col cols="6">
                        <h3 class="text1-btn">Статистика</h3>
                        <p class="text1">Всего переходов: 100</p>
                        <p class="text1">Всего авторизовалось: 100</p>
                        <p class="text1">Всего заработано баллов: 100</p>
                        <v-dialog v-model="dialogStatistic" max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        outlined tile large
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    Вся статистика
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="h3">Статистика по привлечениям</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="8">
                                                <v-tabs v-model="tabs" fixed-tabs>
                                                    <v-tabs-slider></v-tabs-slider>
                                                    <v-tab href="#mobile-tabs-5-1" class="primary--text">
                                                        Клиентов
                                                    </v-tab>

                                                    <v-tab href="#mobile-tabs-5-2" class="primary--text">
                                                        Курьеров
                                                    </v-tab>
                                                </v-tabs>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-menu
                                                        ref="menu1"
                                                        v-model="menu"
                                                        :close-on-content-click="false"
                                                        transition="scale-transition"
                                                        offset-y
                                                >
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-text-field
                                                                v-model="dateRangeText"
                                                                label="01.01.20 - 10.02.20"
                                                                v-bind="attrs"
                                                                @blur="date = parseDate(dateFormatted)"
                                                                v-on="on"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker v-model="dates" range no-title></v-date-picker>
                                                </v-menu>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-tabs-items v-model="tabs">
                                                    <v-tab-item
                                                            v-for="i in 2"
                                                            :key="i"
                                                            :value="'mobile-tabs-5-' + i"
                                                    >
                                                        <v-card flat>
                                                            dsfsdfs
                                                        </v-card>
                                                    </v-tab-item>
                                                </v-tabs-items>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-col>
                    <v-col cols="6">
                        <h3 class="text1-btn">Партнёрские баллы</h3>
                        <p class="text1">Баллы на счету: 100</p>
                        <v-dialog v-model="dialogWithdraw" max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        outlined tile large
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    Вывод средств
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="h3">Вывод средств*</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" class="text1">
                                                Вывод средств, заработанных в партнёрской программе Garantbox доступен только на QIWI-кошелёк
                                                <v-row>
                                                    <v-col cols="6">
                                                        <v-text-field label="Сумма вывода"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <v-text-field label="Номер QIWI-кошелька"></v-text-field>
                                                    </v-col>
                                                </v-row>
                                                <p>Комиссия (3%): 0₽</p>
                                                <p>Сумма к списанию: ₽</p>
                                                <small class="text2">*Будьте внимательны при вводе информации, вы несете полную ответственность за правильность данных для перевода средств.</small><br/>
                                                <small class="text2">Вывод осуществляется в течении 72 часов</small><br/>

                                                <v-btn tile large dark color="#E67217">Вывести средства</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-dialog>

                        <v-dialog v-model="dialogTransfer" max-width="600px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                        outlined tile large
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    Перевод на ЛС
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="h3">Перевод на лицевой счет</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" class="text1">
                                                Вы можете перевести партнерские баллы от Garantbox за участие в программе на свой лицевой счет и оплачивать ими ваши доставки.
                                                <v-col cols="6">
                                                    <v-text-field label="Сумма вывода"></v-text-field>
                                                </v-col>
                                                <p>Комиссия (0%): 0₽</p>
                                                <p>Сумма к списанию: ₽</p>
                                                <v-col cols="6">
                                                    <v-btn tile large dark color="#E67217">Перевести баллы</v-btn>
                                                </v-col>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <v-card class="mx-auto">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="headline text-center text1-btn">Ваш QR-код</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>

                    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                    <v-card-text>
                        <p class="text2">Для привлечения друзей в Вашу партнёрскую программу</p>
                        <p class="text2">Поделитесь им в соцсетях:</p>
                        <v-row justify="center">
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Facebook.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/LinkedIn.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Telegram.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Skype.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Viber.svg" />
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Twitter.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/WhatsApp.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/Instagram.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/VK.svg" />
                            </v-col>
                            <v-col cols="2">
                                <v-img src="@/assets/icons/social/OK.svg" />
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar" :top="true">
            Ссылка скопирована в буфер обмена
        </v-snackbar>
    </div>
</template>

<script>
    export default {
        name: "Partnership",
        data: vm => ({
            snackbar: false,
            dialogStatistic: false,
            dialogTransfer: false,
            dialogWithdraw: false,
            tabs: null,
            menu: false,
            dates: [],
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        }),
        watch: {
            date () {
                this.dateFormatted = this.formatDate(this.dates)
            },
        },
        computed: {
            dateRangeText () {
                return this.dates.join(' - ')
            },
        },
        methods: {
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
            copeToClipboard(data) {
                navigator.clipboard.writeText(data)
                    .then(() => {
                        // Получилось!
                        this.snackbar = true;
                    })
                    .catch(err => {
                        console.log('Something went wrong', err);
                    });
            }
        }
    }
</script>

<style scoped>
    .head {
        padding-bottom: 38px;
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .color.text1 {
        cursor: default;
        color: #E67217;
    }
</style>
