<template>
    <div class="header">
        <div class="sting-menu">
            <v-container class="c">
                <v-row no-gutters>
                    <span class="text1 text--white" @click.stop="dialogCity.show = true">Выбор города</span>
                </v-row>
            </v-container>
        </div>
        <v-container>
            <v-app-bar app color="white" style="margin-top: 30px">
                <div class="d-flex align-center">
                    <router-link to="/">
                        <v-img src="../assets/logo_2.svg" max-height="75" max-width="223"/>
                    </router-link>
                </div>

                <v-spacer></v-spacer>

                    <span @click.stop="sheet.show = !sheet.show" class="mx-3 menu">Услуги</span>
                    <router-link to="/clients" class="mx-3 menu">Клиентам</router-link>
                    <router-link to="/kuryeram" class="mx-3 menu">Курьерам</router-link>
                    <router-link to="/about" class="mx-3 menu">О компании</router-link>
                    <router-link to="/contacts" class="mx-3 menu">Контакты</router-link>

                <v-spacer></v-spacer>

                <v-btn @click.stop="login.show = true" text>
                    <span class="mr-2 font-weight-light">Войти</span>
                </v-btn>
                <v-btn icon @click.stop="sheet.show = !sheet.show">
                    <v-icon>menu</v-icon>
                </v-btn>
            </v-app-bar>
        </v-container>

        <MenuBigHeader :inputData="sheet" />
        <SelectCity :inputData="dialogCity" />
        <Login :inputData="login" />
    </div>
</template>

<script>
    import MenuBigHeader from "./public/MenuBigHeader";
    import SelectCity from "./public/SelectCity";
    import Login from "./public/Login";

    export default {
        name: "MenuHeader",
        components: {MenuBigHeader, SelectCity, Login},
        data: () => ({
            sheet: {show: false},
            dialogCity: {show: false},
            login: {type: 'sign_in', show: false}
        }),
        methods: {
            link(url) {
                // this.$route.push({path: url});
                window.history.pushState({}, '', url);
            }
        }
    }
</script>

<style scoped>
    .menu {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
        text-decoration: none;
    }

    .c {
        padding: 0;
    }
</style>
