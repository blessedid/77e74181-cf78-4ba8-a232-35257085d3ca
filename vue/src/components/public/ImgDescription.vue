<template>
    <div class="com-7">
        <h1 class="text-center head">Как начать?</h1>
        <v-row justify="center">
            <v-col :cols="Math.floor(12 / items.length)" v-for="(item, i) of items" :key="i">
                <v-card class="mx-auto" style="box-shadow: none">
                    <v-img :src="item.image" />

                    <v-card-title class="title-image">{{ item.title }}</v-card-title>

                    <v-card-text>
                        <div class="subtitle-1" v-html="item.description"></div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ImgDescription",
        data: () => ({
            items: [
                {image: 'http://via.placeholder.com/360x411', title: 'Установите приложение', description: 'Скачать и установить приложение можно в GooglePlay или AppStore'},
                {image: 'http://via.placeholder.com/360x411', title: 'Зарегистрируйтесь', description: 'Для регистрации потребуется указать имя, E-mail и телефон'},
                {image: 'http://via.placeholder.com/360x411', title: 'Выберите заказ', description: 'На карте появляются актуальные заказы, которые можно выбирать'},
            ]
        })
    }
</script>

<style scoped>
.com-7 {
    padding-top: 200px;
}
    .head {
        padding-bottom: 73px;

        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }

    .title-image {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }

    .subtitle-1 {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
</style>
