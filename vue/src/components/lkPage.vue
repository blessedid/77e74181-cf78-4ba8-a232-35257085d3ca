<template>
    <div class="page">
        <MenuHeader/>
        <v-main>
            <v-container style="max-width: 1600px;">
                <v-row>
                    <v-col cols="2">
                        <v-list dense>
                            <v-list-item v-for="(item, i) of menu" :key="i" @click="getComponent(item.url)">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col cols="9">
                        <Profile />
                        <Orders />
                        <Documents />
                        <Partnership />
                        <Balance />
                        <Treatment />
                        <Settings />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <Footer/>
    </div>
</template>

<script>
    // const NotFoundComponent = import('NotFoundComponent.vue');
    import MenuHeader from "./MenuHeader";
    import Footer from "./public/Footer";
    import Profile from "./lk/Profile";
    import Orders from "./lk/Orders";
    import Documents from "./lk/Documents";
    import Partnership from "./lk/Partnership";
    import Balance from "./lk/Balance";
    import Treatment from "./lk/Treatment";
    import Settings from "./lk/Settings";

    export default {
        name: "lkPage",
        components: {
            MenuHeader,
            Footer,
            Profile,
            Orders,
            Documents,
            Partnership,
            Balance,
            Treatment,
            Settings
        },
        data: () => ({
            menu: [
                {url: 'profile', name: 'Учётная запись'},
                {url: 'orders', name: 'Мои заказы'},
                {url: 'balance-detail', name: 'Детализация баланса'},
                {url: 'bill', name: 'Выставить счёт'},
                {url: 'documents', name: 'Документы'},
                {url: 'balance', name: 'Баланс'},
                {url: 'partnership', name: 'Партнёрская программа'},
                {url: 'treatment', name: 'Обращения'},
                {url: 'settings', name: 'Настройки'},
                {url: 'logout', name: 'Выйти'},
            ]
        }),
        methods: {
            getComponent(url) {
                this.$router.push(url);
            }
        }
    }
</script>

<style scoped>

</style>
