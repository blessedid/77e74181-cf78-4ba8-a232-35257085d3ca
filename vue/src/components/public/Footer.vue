<template>
    <div class="footer-com">
        <v-footer padless color="orange darken-3" dark class="footer">
            <v-container>
                <v-row no-gutters>
                    <v-col cols="5" class="logo">
                        <v-img src="../../assets/logo.svg" max-width="222" max-height="55" />
                        <div class="down-app-wrap">
                            <span class="down-app">Заказать доставку через приложение</span>
                        </div>
                        <div class="down-logo">
                            <v-img src="../../assets/apple.png" max-width="137" max-height="40"/>
                        </div>
                        <div class="down-logo">
                            <v-img src="../../assets/google.png" max-width="137" max-height="40"/>
                        </div>
                    </v-col>
                    <v-col cols="7">
                        <v-row class="links">
                            <v-col cols="3">
                                <ul>
                                    <li class="upper"><router-link class="link-item" to="/clients">Клиентам</router-link></li>
                                    <li><router-link class="link-item" to="/order">Заказать доставку</router-link></li>
                                    <li><router-link class="link-item" to="#">Отследить отправление</router-link></li>
                                    <li><router-link class="link-item" to="#">Отзывы</router-link></li>
                                    <li><router-link class="link-item" to="/help">Помощь</router-link></li>
                                    <li><router-link class="link-item" to="#">Компенсация</router-link></li>
                                </ul>
                            </v-col>
                            <v-col cols="3">
                                <ul>
                                    <li class="upper"><router-link class="link-item" to="/kuryeram">Курьерам</router-link></li>
                                    <li><router-link class="link-item" to="#">Отзывы о работе</router-link></li>
                                    <li><router-link class="link-item" to="#">Скачать приложение</router-link></li>
                                </ul>
                            </v-col>
                            <v-col cols="3">
                                <ul>
                                    <li class="upper"><router-link class="link-item" to="#">Услуги</router-link></li>
                                    <li><router-link class="link-item" to="#">Срочная доставка</router-link></li>
                                    <li><router-link class="link-item" to="#">Доставка еды</router-link></li>
                                    <li><router-link class="link-item" to="#">Аренда курьера</router-link></li>
                                    <li><router-link class="link-item" to="#">Массовая рассылка</router-link></li>
                                    <li><router-link class="link-item" to="#">Доставка продуктов</router-link></li>
                                    <li><router-link class="link-item" to="#">Доставка в тюрьму</router-link></li>
                                    <li><router-link class="link-item" to="#">Междугородняя доставка</router-link></li>
                                </ul>
                            </v-col>
                            <v-col cols="3">
                                <ul>
                                    <li class="upper"><router-link class="link-item" to="/about">О компании</router-link></li>
                                    <li class="upper"><router-link class="link-item" to="/contacts">Контакты</router-link></li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                2012-2020 GarantBox | Все права защищены | Пользовательское соглашение
            </v-container>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    ul {
        list-style-type: none;
    }
    li {
        padding-bottom: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
    }
    .footer-com {
        padding-top: 200px;
    }
    .footer {
        /*max-height: 435px;*/
    }
    .links {
        padding-top: 70px;
    }
    .logo {
        padding-top: 55px;
    }
    .down-app {
        max-width: 210px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
    }
    .down-app-wrap {
        max-width: 216px;
        padding-top: 35px;
        padding-bottom: 12px;
    }
    .down-logo {
        padding-bottom: 10px;
    }

    .upper {
        text-transform: uppercase;
        padding-bottom: 27px;
    }
    .link-item {
        color: #FEFEFE;
    }
</style>
