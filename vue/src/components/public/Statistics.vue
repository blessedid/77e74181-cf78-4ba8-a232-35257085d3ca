<template>
    <v-row class="com-6">
        <v-col v-for="(item, i) in inputData" :key="i">
            <div>
                <div class="more">Более</div>
                <div class="text-center big-count">{{ item.count }}</div>
                <div class="desc">{{ item.title }}</div>
            </div>
            <p>{{ item.description }}</p>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: ['inputData'],
        name: "Statistics"
    }
</script>

<style scoped>
    .com-6 {
        padding-top: 100px;
    }

    .more {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #495865;
        margin-bottom: -45px;
    }

    .big-count {
        font-style: normal;
        font-weight: bold;
        font-size: 172px;
        line-height: 205px;
        color: #495865;
    }

    .desc {
        max-width: 135px;
        margin-left: auto;

        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #E67217;
    }

    p {
        padding-top: 16px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
</style>
