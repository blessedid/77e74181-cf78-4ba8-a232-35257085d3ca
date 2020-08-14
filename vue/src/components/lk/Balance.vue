<template>
    <div class="balance">
        <h1 class="h3">Баланс</h1>
        <v-row>
            <v-col cols="6">
                <v-row class="text1 count">
                    <v-col cols="4">
                        2 000 ₽
                    </v-col>
                    <v-col cols="4">
                        2 000 баллов
                    </v-col>
                    <v-col cols="4">
                        100 заказов
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="6">
                <h3 class="text1-btn h">История операций, ₽</h3>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left text2-btn">Дата</th>
                            <th class="text-left text2-btn">Операция</th>
                            <th class="text-right text2-btn">Сумма</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td class="text2">{{ item.date }}</td>
                            <td class="text2">{{ item.action }}</td>
                            <td class="text-right text2">{{ priceSet(item.amout) }} ₽</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col cols="6">
                <h3 class="text1-btn h">История операций, баллы</h3>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                        <tr>
                            <th class="text-left text2-btn">Дата</th>
                            <th class="text-left text2-btn">Операция</th>
                            <th class="text-right text2-btn">Сумма</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="item in desserts" :key="item.name">
                            <td class="text2">{{ item.date }}</td>
                            <td class="text2">{{ item.action }}</td>
                            <td class="text-right text2">{{ priceSet(item.amout) }} Б</td>
                        </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Balance",
        data: () => ({
            desserts: [
                {date: '10.02.2020', action: 'Поступление', amout: 2500.00},
                {date: '10.02.2020', action: 'Поступление', amout: 2000.00},
                {date: '10.02.2020', action: 'Расход', amout: 500.00},
            ]
        }),
        methods: {
            priceSet: (data) => {
                return Number.prototype.toFixed.call(parseFloat(data) || 0, 2)
                    .replace(/(\D)/g, ",")
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

                // return price + ' руб.';
            }
        }
    }
</script>

<style scoped>
    .h3 {
        padding-bottom: 38px;
    }
    .count {
        padding-bottom: 51px;
    }
    .h {
        padding-bottom: 20px;
    }
</style>
