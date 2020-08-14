<template>
    <div class="com-1">
        <h1 class="text-center">Наши услуги</h1>

        <v-row dense>
            <v-col md="4" sm="6" xs="12" v-for="(serviceItem,serviceIndex) in inputData" :key="serviceIndex">
                <v-card class="service-item" style="box-shadow: none">
                    <v-card-title class="v-card-title" style="padding-left: 0">
                        <v-list-item-avatar color="grey" tile size="65">
                            <v-img src="http://via.placeholder.com/65x65" width="65" height="65"></v-img>
                        </v-list-item-avatar>
                        <span class="title font-weight-bold">{{ serviceItem.title }}</span>
                    </v-card-title>

                    <v-card-text class="headline font-weight-light v-card-text">{{ serviceItem.description }}</v-card-text>

                    <v-card-actions>
                        <v-list-item class="grow">
                            <v-list-item-content>
                                <v-list-item-title>
                                    <router-link :to="serviceItem.link" class="details">
                                        Подробнее <v-icon large>trending_flat</v-icon>
                                    </router-link>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        props: ['inputData'],
        name: "OurServices"
    }
</script>

<style scoped>
    .com-1 {
        padding-top: 200px;
    }

    .service-item {
        box-shadow: none;
    }
    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }

    .v-card-title {
        align-items: flex-end;

        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color: #2B2A29;
    }

    .v-card-text {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 170%;
        color: #2B2A29;
    }

    .details {
        text-decoration: none;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }
</style>
