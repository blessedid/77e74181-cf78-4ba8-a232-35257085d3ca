<template>
    <div>
        <h1 class="head">Часто задаваемые вопросы</h1>

        <v-row>
            <v-col cols="4">
                <v-text-field
                        label="Поиск по вопросам"
                        filled
                        append-icon="search"
                ></v-text-field>
            </v-col>
        </v-row>

        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Item
                    <template v-slot:actions>
                        <v-icon>add</v-icon>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <div class="h" style="max-width: 770px;margin: 0 auto">
            <h1 class="text-center">Если Вы не нашли ответа на свой вопрос, то задайте его нам</h1>
        </div>
        <v-row justify="center">
            <v-col cols="4">
                <ContactForm />
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import ContactForm from "./ContactForm";
    export default {
        name: "FAQ",
        components: {ContactForm}
    }
</script>

<style scoped>
    .h {
        padding-top: 200px;
    }
    .head {
        padding-bottom: 56px;
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 56px;
        line-height: 67px;
        color: #2B2A29;
    }
</style>
