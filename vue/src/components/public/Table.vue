<template>
    <div>
        <h2 class="h2 text-center">Тарифы</h2>
        <v-simple-table class="table">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center headline" v-for="(header, i) in headers" :key="i">
                        {{ header.text }}
                        <v-row align="center" justify="center">
                            <v-img :src="header.image" max-height="106" max-width="106" />
                        </v-row>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(items, i) in dataTable" :key="i">
                    <td v-for="(item, idx) in items" :key="idx" v-bind:class="{'text-center' : idx !== 0}">
                        <span :class="item.color">{{ item.value }}</span>
                    </td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data: () => ({
            headers: [
                {text: '', image: ''},
                {text: 'Эконом', image: 'http://via.placeholder.com/106x106'},
                {text: 'Комфорт', image: 'http://via.placeholder.com/106x106'},
                {text: 'Бизнес', image: 'http://via.placeholder.com/106x106'},
                {text: 'Авто', image: 'http://via.placeholder.com/106x106'},
            ],
            dataTable: [
                [{color: '', value: 'Рейтинг курьера'}, {color: '', value: '4.0'}, {color: '', value: '4.1'}, {color: '', value: '4.6'}, {color: '', value: '4.6'}],
                [{color: '', value: 'Абон. плата'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: '', value: 'Нет'}],
                [{color: '', value: 'Гарантия дешёвой доставки'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}],
                [{color: '', value: 'Гарантия вовремя или бесплатно'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}],
                [{color: '', value: 'Заказ через сайткруглосуточно'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}],
                [{color: '', value: 'Заказ через оператора 8:00-22:00'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}],
                [{color: '', value: 'Интеграция с сайтом'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: 'green--text text--accent-4', value: 'Да'}],
                [{color: '', value: 'Персональный менеджер'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: '', value: 'Нет'}],
                [{color: '', value: 'Общение оператора и получателя'}, {color: '', value: 'Нет'}, {color: '', value: 'Нет'}, {color: 'green--text text--accent-4', value: 'Да'}, {color: '', value: 'Нет'}],
            ]
        })
    }
</script>

<style scoped>
    .h2 {
        padding-top: 200px;
    }
    .table {
        padding-top: 58px;
    }
</style>
