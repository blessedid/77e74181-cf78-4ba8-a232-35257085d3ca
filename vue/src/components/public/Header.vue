<template>
    <v-card class="mx-auto v-card" max-width="100%" style="border-radius: unset;" flat>
        <v-img
                class="white--text align-center"
                height="100%"
                src="http://via.placeholder.com/1400x688"
        >
            <v-card-title>
                <v-col class="text-left">
                    <h1 class="head-title" v-html="inputData.title"></h1>
                    <h3 class="head-subtitle" v-html="inputData.subtitle"></h3>
                    <div class="btn-grp">
                        <v-btn v-for="(item, i) of inputData.button" :key="i" class="h-btn ma-2" tile color="orange darken-3" dark :outlined="item.outlined" :to="item.link" large>
                            {{ item.text }}
                        </v-btn>
                    </div>
                </v-col>
            </v-card-title>
        </v-img>
        <v-card
                class="mx-auto"
                :max-width="inputData.tongue.width"
                style="margin-top: -83px;"
                v-if="inputData.tongue"
        >
            <v-card-text v-bind:style="{height: inputData.tongue.height}">
                <v-list-item-title class="tongue-titile mt-2" v-if="inputData.tongue.type === 'form'">
                    Отследить отправление
                </v-list-item-title>
                <v-card-text>
                    <v-form>
                        <v-container>
                            <v-row v-if="inputData.tongue.type === 'form'">

                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field label="Введите номер отправления" filled></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="3">
                                    <v-text-field label="Введите номер телефона" filled></v-text-field>
                                </v-col>

                                <v-col cols="12" sm="6" md="3">
                                    <v-btn tile outlined color="orange darken-3" height="56" dark large>
                                        Отследить отправление
                                    </v-btn>
                                </v-col>

                                <v-col cols="12" sm="6" md="3">
                                    или установите приложение, чтобы быть всегда в курсе
                                </v-col>

                            </v-row>

                            <v-row v-if="inputData.tongue.type === 'text'">

                                <v-col cols="12" sm="6" md="3" v-for="(item, i) of inputData.tongue.text" :key="i">
                                    <h3 class="title-subheader">{{ item }}</h3>
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
            </v-card-text>
        </v-card>
    </v-card>
</template>

<script>
    export default {
        props: ['inputData'],
        name: "Header"
    }
</script>

<style scoped>
    .head-title {
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 71px;
        color: #FEFEFE;
        max-width: 820px;
    }

    .head-subtitle {
        padding-top: 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #FEFEFE;

    }

    .btn-grp {
        padding-top: 45px;
    }

    .h-btn {
        height: 52px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
    }

    .tongue-titile {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }

    .title-subheader {
        max-width: 200px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #2B2A29;
    }
</style>
