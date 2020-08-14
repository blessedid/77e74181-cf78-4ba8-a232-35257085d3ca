<template>
    <div class="com-5">
        <h1 class="text-center">{{ inputData.title }}</h1>
        <v-row no-gutters>
            <v-col align-self="center" :md="(inputData.cols) ? inputData.cols : 6" xs="12">
                <v-img :src="inputData.image" max-width="417" max-height="600" class="mx-auto"/>
            </v-col>
            <v-col align-self="center" :md="(inputData.cols) ? inputData.cols : 6" xs="12">
                <div class="text" v-html="inputData.text"></div>
                <div class="link-style">
                    <router-link v-for="(item, i) in inputData.links" :key="i" :to="item.link">
                        {{item.text}}
                        <v-icon large v-if="item.text">trending_flat</v-icon>
                        <v-img v-if="item.image" width="137" height="40" :src="item.image"></v-img>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        props: ['inputData'],
        name: "BlockPictureLeft"
    }
</script>

<style scoped>
    .com-5 {
        padding-top: 140px;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
        padding-bottom: 63px;
    }

    .text {
        max-width: 476px;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .link-style {
        text-decoration: none;
        padding-top: 67px;

        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
    }

    .link-style > a {
        text-decoration: none;
        color: #2B2A29;
    }
</style>
