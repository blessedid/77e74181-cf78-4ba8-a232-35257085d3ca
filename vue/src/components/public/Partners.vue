<template>
    <div class="com-10">
        <h1 class="text-center head">Наши партнёры</h1>

        <v-row>
            <v-col cols="2" v-for="n in 18" :key="n">
                <v-img max-width="200" max-height="99" src="http://via.placeholder.com/200x99/008000" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Partners"
    }
</script>

<style scoped>
    .com-10 {
        padding-top: 200px;
    }

    .head {
        padding-bottom: 76px;
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }
</style>
