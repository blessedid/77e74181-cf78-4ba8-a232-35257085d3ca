<template>
    <div class="com-9">
        <h1 class="text-center head">Реквизиты:</h1>
        <v-row v-for="(item, i) of requisites" :key="i">
            <v-col cols="5"><span class="key">{{ item.name }}</span></v-col>
            <v-col cols="7"><span class="val">{{ item.value }}</span></v-col>
        </v-row>
        <v-row class="fr">
            <v-col cols="5"><h2>Отдел франчайзи:</h2></v-col>
            <v-col cols="7">
                <span class="key">Контактный телефон:</span>
                <h2 class="val">8-800-775-22-33</h2>
                <span class="key">E-mail:</span>
                <h2 class="val">garantbox@bonplan.ru</h2>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Requisites",
        data: () => ({
            requisites: [
                {name: 'Наименование организации:', value: 'Общество с ограниченной ответственностью “Гонец”'},
                {name: 'ИНН:', value: '7731318514'},
                {name: 'ОГРН:', value: '1167746543580'},
                {name: 'Адрес:', value: 'Москва, ул. Садовая-Кудринская, 11/стр. 1'},
                {name: 'E-mail:', value: 'office@garantbox.ru'},
                {name: 'Контактный телефон:', value: '+7 (499) 112-35-57'},
            ]
        })
    }
</script>

<style scoped>
    .com-9 {
        padding-top: 200px;
    }

    .head {
        padding-bottom: 59px;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }

    .key {
        padding-bottom: 10px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .val {
        padding-bottom: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .fr {
        padding-top: 140px;
    }
</style>
