<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>
    require('./styles/PTRootUI/stylesheet.css');
    require('./styles/SFProDisplay/stylesheet.css');
export default {
    name: 'App',
    data: () => ({
        //
    }),
};
</script>

<style>
    * {
        font-family: PT Root UI;
    }

    .h1 {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 71px;
        color: #2B2A29;
    }
    .h2 {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }
    .h3 {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .text1 {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
    .text1-btn {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
    .text2 {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .text2-btn {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }

    .link {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #E67217;
    }
    .link:hover {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #FF923C;
    }
    .link:active {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
    .link .disable {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
        opacity: 0.5;
    }
</style>
