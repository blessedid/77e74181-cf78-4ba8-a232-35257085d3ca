<template>
    <div class="table">
        <v-data-table
                :headers="headers"
                :items="desserts"
                :page.sync="page"
                :items-per-page="itemsPerPage"
                hide-default-footer
                class="elevation-1"
                @click:row="clickRow"
                @page-count="pageCount = $event"
        >
            <template v-slot:item.action="{ item }">
                <div style="text-align: end;">
                    <v-btn text small @click.stop="actionDelete(item.id)">Удалить</v-btn>
                </div>
            </template>
        </v-data-table>

        <v-row style="padding-top: 28px">
            <v-col cols="3">
                Всего: {{ desserts.length }}
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="3">
                <v-btn icon color="pink" @click.stop="pageFlipping(-1, $event)">
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>
                Страница: {{ page }} из {{ pageCount }}
                <v-btn icon color="pink" @click.stop="pageFlipping(1, $event)">
                    <v-icon>keyboard_arrow_right</v-icon>
                </v-btn>
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="3">
                Отображать по:
                <span v-bind:class="['mx-2', 'count', itemsPerPage === 10 ? 'active' : '' ]" @click="displayBy(10, $event)">10</span>
                <span v-bind:class="['mx-2', 'count', itemsPerPage === 20 ? 'active' : '' ]" @click="displayBy(20, $event)">20</span>
                <span v-bind:class="['mx-2', 'count', itemsPerPage === 50 ? 'active' : '' ]" @click="displayBy(50, $event)">50</span>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props: ['inputData'],
        data: () => ({
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            headers: [],
            desserts: [],
        }),
        created() {
            this.headers = [...this.inputData.headers];
            this.desserts = [...this.inputData.desserts];
        },
        methods: {
            pageFlipping(i, event) {
                event.stopPropagation();

                if (i > 0 && this.page < this.pageCount) this.page++;
                if (i < 0 && this.page > 1) this.page--;
            },
            displayBy(i = 10, event) {
                event.stopPropagation();

                this.itemsPerPage = i;
            },
            actionDelete(e) {
                this.$emit('action-delete', e);
            },
            clickRow(e) {
                this.$emit('click-row', e);
            }
        }
    }
</script>

<style scoped>
    td {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    th {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .count {
        cursor: default;
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #2B2A29;
    }
    .active {
        font-family: PT Root UI;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        color: #E67217;
    }
</style>
