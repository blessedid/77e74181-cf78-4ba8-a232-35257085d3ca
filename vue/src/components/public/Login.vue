<template>
    <v-dialog v-model="inputData.show" :max-width="(inputData.type === 'sign_up') ? 503 : 435">
        <v-card>

            <v-card-text v-if="inputData.type === 'sign_up'">
                <h1 class="head">Регистрация</h1>
                Вы регистрируетесь в качестве клиента по городу:
                <span>Moscow</span>

                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Фамилия, имя, отчество" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Номер телефона" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Пароль" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field label="Повторите пароль" type="password" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <p>Регистрируясь, вы соглашаетесь с Пользовательским соглашением, в том числе и на
                                обработку персональных данных.</p>
                        </v-col>
                        <v-col cols="6">
                            <v-btn color="#E67217" dark depressed tile>Регистрация клиентом</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <span>Уже есть учётная запись? <span @click="changeForm('sign_in')" class="link">Войти</span></span>
                        </v-col>
                        <v-col cols="12">
                            Хотите зарегистрироваться в качестве курьера? Подробнее
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-text v-if="inputData.type === 'sign_in'">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h1 class="head">Вход</h1>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field class="input" label="Логин" filled required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field class="input" label="Пароль" type="password" filled required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox label="Запомнить меня"></v-checkbox>
                        </v-col>
                        <v-col cols="12">
                            <v-btn color="#E67217" dark block depressed tile>Войти</v-btn>
                        </v-col>
                        <v-col cols="12">
                            Нет учётной записи? <span @click="changeForm('sign_up')" class="link">Зарегистрируйтесь</span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Login",
        props: ['inputData'],
        methods: {
            changeForm(form) {
                this.inputData.type = form;
            }
        }
    }
</script>

<style scoped>
    .head {
        padding-top: 40px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        color: #2B2A29;
    }

    .input {
        height: 56px;
    }

    .link {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #E67217;
    }
</style>
