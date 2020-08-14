<template>
    <div>
        <h1 class="profile-com-head">Учётная запись</h1>
        <v-row class="padding-top">
            <v-col cols="2">
                <p class="profile-com-hk">Лицевой счёт</p>
                <h3 class="profile-com-hv">00045</h3>
            </v-col>
        </v-row>
        <v-row class="padding-top">
            <v-col cols="2">
                <p class="profile-com-hk">Почта</p>
                <h3 class="profile-com-hv">Ivanov0064@gmail.com</h3>
            </v-col>
            <v-col cols="2">
                <span class="profile-com-ch">Изменить</span>
            </v-col>
        </v-row>
        <v-row class="padding-top">
            <v-col cols="2">
                <p class="profile-com-hk">Телефон</p>
                <h3 class="profile-com-hv">+7 (999) 123-4567</h3>
            </v-col>
            <v-col cols="2">
                <span class="profile-com-ch">Изменить</span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="2">
                <v-text-field label="Введите промо-код"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn tile class="ma-2" outlined color="indigo">Активировать</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>
    .profile-com-head {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }

    .profile-com-hk {
        /*padding-top: 40px;*/
        margin-bottom: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }

    .profile-com-hv {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .profile-com-ch {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #E67217;
        position: absolute;
        bottom: 12px;
    }
    .padding-top {
        padding-top: 40px;
        position: relative;
    }
</style>
