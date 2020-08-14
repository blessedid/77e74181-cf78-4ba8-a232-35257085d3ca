<template>
    <div>
        <h1 class="head">Контакты</h1>
        <v-row>
            <v-col cols="5">
                <p class="h2">Воспользуйтесь формой, чтобы задать вопрос</p>
                <ContactForm/>
            </v-col>
            <v-col cols="7">
                <yandex-map
                        id="ya-map"
                        :coords="coords"
                        :zoom="17"
                        @click="onClick"
                >
                    <ymap-marker
                            :coords="coords"
                            marker-id="123"
                            hint-content="some hint"
                    />
                </yandex-map>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ContactForm from "./ContactForm";
    export default {
        name: "Contacts",
        components: {ContactForm},
        data: () => ({
            coords: [55.762682568964706, 37.586283999999914],
        }),
        methods: {
            onClick(e) {
                this.coords = e.get('coords');
            },
        },
    }
</script>

<style scoped>
    #ya-map {
        width: 100%;
        height: 422px;
    }

    .head {
        padding-bottom: 85px;
        font-style: normal;
        font-weight: 600;
        font-size: 56px;
        line-height: 67px;
        color: #2B2A29;
    }

    .h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }
</style>
