<template>
    <div>
        <h1 class="head">Документы</h1>
    <v-row>
        <v-col cols="4">
            <v-row>
                <v-col cols="10" style="text-align: end;">
                    <span class="name-file text-end">Договор присоединения</span><br/>
                    <span class="size-file text-end">0,24 Мб</span>
                </v-col>
                <v-col cols="2">
                    <v-img src="http://via.placeholder.com/60x60" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    </div>
</template>

<script>
    export default {
        name: "Documents"
    }
</script>

<style scoped>
    .head {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
    .name-file {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
    .size-file {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 140%;
        color: #2B2A29;
    }
</style>
