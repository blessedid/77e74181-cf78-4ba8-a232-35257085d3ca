<template>
    <div class="mx-5">
        <h2 class="h3 mb-2">{{ inputDeliveryType.text }}</h2>
        <v-divider class="mb-3"></v-divider>
        <div class="address" v-for="(item, i) of inputAddresses" :key="i">
            <span class="text1-btn">{{(i === 0) ? 'Забираем' : 'Доставляем'}}:</span>
            <p class="text2 mb-2 mt-3">{{ item.address.value }}
                <span class="text2" v-if="item.flat.value">Кв/оф. {{ item.flat.value }}</span>
            </p>
            <p class="text2 mb-2">{{ item.dateTime.value }}</p>
            <p class="text2">Телефон: {{ item.phone.value }}
                <span class="text2" v-if="item.additionalNumber.value">,  доб.: {{ item.additionalNumber.value }}</span>
            </p>
            <p class="text2 mb-2" v-if="item.contactPerson.value">Контактное лицо: {{ item.contactPerson.value }}</p>
            <p class="text2 mb-2" v-if="item.comment.value">Комментарий: {{ item.comment.value }}</p>
            <p class="text2 mb-2" v-if="item.redeem.value">Выкуп: {{ item.redeem.value }}</p>
            <p class="text2 mb-2" v-if="item.extensionNumber.value">{{ item.extensionNumber.value }}</p>
        </div>

        <p class="text2 mb-2" v-if="inputDeliveryDetails.cargoValue">Ценность груза: {{inputDeliveryDetails.cargoValue}}</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.cargoWeight">Вес груза: {{inputDeliveryDetails.cargoWeight}} кг</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.cancellationSuretyAgreement">Отказываюсь от договора поручительства</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.fragileCargo">Хрупкий груз</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.transportCompany">Оформление отправления в транспортной компании</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.redemptionGoods">Выкуп товара</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.submissionTaxReports">Сдача налоговой отчётности и отчётности в госорганах</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.thermalBag">Наличие термосумки</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.listProducts">Перечень продуктов: {{ inputDeliveryDetails.listProducts }}</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.preferredStores">Предпочитаемые магазины: {{ inputDeliveryDetails.preferredStores }}</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.dimensions.len">Размеры груза: {{ inputDeliveryDetails.dimensions.len}} x {{ inputDeliveryDetails.dimensions.width}} x {{ inputDeliveryDetails.dimensions.heights}}</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.email">E-mail: {{ inputDeliveryDetails.email }}</p>
        <p class="text2 mb-2" v-if="inputDeliveryDetails.paymentMethod">Способ оплаты {{ inputDeliveryDetails.paymentMethod }}</p>

        <v-btn @click="comeBack">Редактировать заказ</v-btn>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "ChoiceTariff",
        props: ['inputAddresses', 'inputDeliveryType', 'inputDeliveryDetails'],
        methods: {
            ...mapMutations(['setStep']),
            comeBack() {
                this.setStep('setParamDelivery');
            }
        }
    }
</script>

<style scoped>
    .h3 {
        padding-top: 40px;
    }
    .address {
        padding-bottom: 33px;
    }
</style>
