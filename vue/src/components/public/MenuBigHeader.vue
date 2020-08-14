<template>
    <div>
        <v-bottom-sheet v-model="inputData.show" transition="scroll-y-transition">
            <v-sheet height="486">
                <v-container>
                    <v-row>
                        <v-col cols="4">
                            <div class="logo">
                                <v-img src="http://via.placeholder.com/55x154" max-width="154" max-height="55"/>
                            </div>
                            <span class="city">Ваш город:</span><br/>
                            <span class="city-select" @click.stop="dialogCity.show = true">Moscow</span>
                        </v-col>
                        <v-col cols="2">
                            <ul class="ul-menu">
                                <li class="menu-head">Услуги</li>
                                <li class="menu">Срочная доставка</li>
                                <li class="menu">Доставка для кафе</li>
                                <li class="menu">Аренда курьера</li>
                                <li class="menu">Массовая рассылка</li>
                                <li class="menu">Доставка продуктов</li>
                                <li class="menu">Доставка в тюрьму</li>
                                <li class="menu">Междугородняя доставка</li>
                                <li class="menu">API интеграция</li>
                            </ul>
                        </v-col>
                        <v-col cols="2">
                            <ul class="ul-menu">
                                <li class="menu-head"><router-link to="/clients">Клиентам</router-link> </li>
                                <li class="menu"><router-link to="/order">Заказать доставку</router-link></li>
                                <li class="menu">Отследить отправление</li>
                                <li class="menu"><router-link to="/price">Тарифы</router-link></li>
                                <li class="menu"><router-link to="/help">Помощь</router-link></li>
                                <li class="menu">Компенсация</li>
                                <li class="menu">Отзывы клиентов</li>
                            </ul>
                        </v-col>
                        <v-col cols="2">
                            <ul class="ul-menu">
                                <li class="menu-head"><router-link to="/kuryeram">Курьерам</router-link></li>
                                <li class="menu">Условия работы</li>
                                <li class="menu">Скачать приложение</li>
                                <li class="menu">Отзывы курьеров</li>
                            </ul>
                        </v-col>
                        <v-col cols="2">
                            <ul class="ul-menu">
                                <li class="lk menu-3">
                                    <v-menu bottom origin="center center" transition="scale-transition">
                                        <template v-slot:activator="{ on, attrs }">
                                            <span v-bind="attrs" v-on="on">Личный кабинет</span>
                                        </template>

                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>Личный кабинет</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Мои заказы</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Настройки</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title>Выйти</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </li>
                                <li class="menu-3"><router-link to="/about">О компании</router-link></li>
                                <li class="menu-3">Франшиза</li>
                                <li class="menu-3"><router-link to="/contacts">Контакты</router-link></li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-bottom-sheet>
        <SelectCity :inputData="dialogCity" />
    </div>
</template>

<script>
    import SelectCity from "./SelectCity";
    export default {
        name: "MenuBigHeader",
        props: ['inputData'],
        components: {SelectCity},
        data: () => ({
            dialogCity: {show: false},
        })
    }
</script>

<style scoped>
    .menu-head, .menu-head > a {
        text-decoration: none;
        padding-bottom: 25px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .menu, .menu > a {
        text-decoration: none;
        padding-bottom: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }

    .menu-3, .menu-3 > a {
        text-decoration: none;
        padding-bottom: 40px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .lk {
        font-weight: 500;
    }

    .city {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }

    .city-select {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #E67217;
    }

    .logo {
        padding-bottom: 26px;
    }
</style>
