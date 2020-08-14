<template>
    <div class="review-com">
        <h1 class="text-center review-head">Отзывы наших клиентов</h1>
        <v-card class="col-3">
            <v-card-title>
                <span class="title font-weight-light">
                    <v-img src="http://via.placeholder.com/159x67"/>
                </span>
            </v-card-title>

            <v-card-text>
                <span class="headline font-weight-bold">Эдельвейс</span>
                <p>Недавно наша цветочная база запустила новую услугу по доставке цветов, и сувениров! Обратились за помощью в компанию GarantBox, и не ошиблись в своём выборе! Мы очень дорожим репутацией и клиентами, поэтому очень важно доставлять заказы вовремя, и в соответствии с пожеланиями клиента! В компании GarantBox вежливые консультанты, быстрые и ответственные курьеры, и довольно невысокие цены! Одно удовольствие работать с этой компанией! Спасибо за хорошую и качественную работу!</p>
            </v-card-text>

            <v-card-actions>
                <v-list-item class="grow">
                    <v-row
                            align="center"
                            justify="end"
                    >
                        <span class="subheading">
                            Елена Карпова <br>
                            Руководитель цветочной базы Еdelwaysflowers.ru
                        </span>
                    </v-row>
                </v-list-item>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "Reviews"
    }
</script>

<style scoped>
    .review-com {
        padding-top: 140px;
    }
.review-head {
    padding-bottom: 71px;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
    color: #2B2A29;
}
</style>
