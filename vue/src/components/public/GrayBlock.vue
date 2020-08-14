<template>
    <v-row no-gutters class="mt-5 com-4">
        <v-col class="color pt-5">
            <h1 class="text-center">{{ inputData.title }}</h1>
            <v-row class="text-center green-block-content" justify="center">
                <v-col class="item" cols="2" v-for="(item, i) in inputData.items" :key="i">
                    <v-list-item-avatar color="grey" tile size="70">
                        <v-img src="http://via.placeholder.com/70x70"/>
                    </v-list-item-avatar>
                    <h2>{{item.title}}</h2>
                    <span>{{item.description}}</span>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: ['inputData', 'title'],
        name: "GrayBlock"
    }
</script>

<style scoped>
    .com-4 {
        padding-top: 140px;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }

    .green-block-content {
        padding-top: 60px;
    }

    h2 {
        padding-top: 35px;
        padding-bottom: 13px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
        max-width: 172px;
        margin: 0 auto;
    }

    span {
        max-width: 172px;
        margin: 0 auto;

        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #2B2A29;
    }

    .item {
        padding-bottom: 60px;
    }

    .color {
        background: #F5F6FA;
    }
</style>
