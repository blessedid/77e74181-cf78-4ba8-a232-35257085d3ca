<template>
    <form>
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Ваше имя"
                        required
                        filled
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                        label="Телефон для связи"
                        required
                        filled
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                        label="E-mail"
                        required
                        filled
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-textarea
                        filled
                        label="Сообщение"
                        auto-grow
                        rows="1"
                ></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-checkbox v-model="termsOfUse" :label="termsOfUseText"></v-checkbox>
            </v-col>
            <v-col cols="12">
                <v-btn>Отправить</v-btn>
            </v-col>
        </v-row>
    </form>
</template>

<script>
    export default {
        name: "ContactForm",
        data: () => ({
            termsOfUse: true,
            termsOfUseText: 'Ознакомлен с <a href="#">Пользовательским соглашением</a>'
        })
    }
</script>

<style scoped>

</style>
