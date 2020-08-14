<template>
    <div class="com-3">
        <h1 class="text-center">Наши курьеры на карте</h1>

        <yandex-map
                id="ya-map"
                :settings="settings"
                :dragable="false"
                :scrollZoom="false"
                :coords="coords"
                :zoom="10"
                @destroy="mapDestroy"
        >
            <ymap-marker
                    :coords="coords"
                    marker-id="123"
                    hint-content="some hint"
            />
        </yandex-map>
    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps';

    export default {
        name: "CouriersOnMap",
        components: { yandexMap, ymapMarker },
        data: () => ({
            map: null,
            coords: [
                54.82896654088406,
                39.831893822753904,
            ],
            settings: {
                apiKey: 'cda2b49d-fcfb-41fc-a237-b33c9b8ec4be',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1'
            }
        }),
        methods: {
            onClick(e) {
                this.coords = e.get('coords');
            },
            mapDestroy: function($map) {
                console.info('mapDestroy', $map);
                $map.destroy();
            },
        },
    }
</script>

<style scoped>
    #ya-map {
        width: 100%;
        height: 709px;
        padding-top: 58px;
    }
    .com-3 {
        padding-top: 200px;
    }
    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }
</style>
