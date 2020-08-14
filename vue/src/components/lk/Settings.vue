<template>
    <div class="settings">
        <h1 class="h3">Настройки</h1>
        <h3 class="text1-btn">Изменить пароль:</h3>
        <v-row no-gutters>
            <v-col cols="12">
                <v-col cols="3">
                    <v-text-field class="text1" label="Введите старый пароль"></v-text-field>
                </v-col>
            </v-col>
            <v-col cols="12">
                <v-col cols="3">
                    <v-text-field class="text1" label="Введите новый пароль"></v-text-field>
                </v-col>
            </v-col>
            <v-col cols="12">
                <v-col cols="3">
                    <v-text-field class="text1" label="Повторите новый пароль"></v-text-field>
                </v-col>
            </v-col>
            <v-col cols="12">
                <v-btn tile class="ma-2" light outlined color="#E67217">Изменить пароль</v-btn>
            </v-col>
            <v-col cols="12"></v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Settings"
    }
</script>

<style scoped>
    .h3 {
        padding-bottom: 31px;
    }
</style>
