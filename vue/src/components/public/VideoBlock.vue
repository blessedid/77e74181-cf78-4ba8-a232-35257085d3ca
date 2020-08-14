<template>
    <div class="video-com">
        <h1 class="text-center video-com-head">Как работает?</h1>
        <v-row>
            <v-col cols="3" v-for="(item, i) of videos" :key="i">
                <v-img :src="'https://i.ytimg.com/vi/'+ item.youtube_key +'/hqdefault.jpg'" @click="overlay = {show: !overlay.show, youtubeKey: item.youtube_key}">
                    <template>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <div class="play"></div>
                        </v-row>
                    </template>
                </v-img>
                <div class="video-name-wrap">
                    <span class="video-name">{{ item.name }}</span>
                </div>
            </v-col>

            <v-overlay
                    :z-index="zIndex"
                    :value="overlay.show"
                    @click="overlay.show = false"
            >
                <v-responsive :aspect-ratio="16/9" max-height="360" max-width="640">
                    <v-btn class="close-overlay" @click="overlay.show = false" icon>
                        <v-icon>clear</v-icon>
                    </v-btn>
                    <iframe width="640" height="360"
                            :src="'https://www.youtube.com/embed/'+ overlay.youtubeKey +'?autoplay=1&autohide=1'" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </v-responsive>
            </v-overlay>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "VideoBlock",
        data: () => ({
            overlay: {show: false, youtubeKey: ''},
            zIndex: 5,
            videos: [
                {youtube_key: 'mfJhMfOPWdE', name: 'Как установить приложение?'},
                {youtube_key: 'xfjZxgcI0yI', name: 'Как зарегистрироваться?'},
                {youtube_key: 'L1Snj1Pt-Hs', name: 'Как получить заказ?'},
                {youtube_key: 'RhMYBfF7-hE', name: 'Как повысить рейтинг?'},
            ]
        }),
        methods: {
            showOverlay: (key) => {
                // this.youtubeKey = key;
                console.log(this.overlay, key);
            }
        }
    }
</script>

<style scoped>
    .play {
        width: 40px;
        height: 40px;
        background-image: url("../../assets/icons/Subtract.svg");
    }

    .close-overlay {
        position: fixed;
        left: calc(100vw - 650px);
        bottom: calc(50% + 150px);
    }

    .video-name {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #2B2A29;
    }

    .video-name-wrap {
        padding-top: 15px;
        text-align: center;
    }

    .video-com {
        padding-top: 175px;
    }

    .video-com-head {
        padding-bottom: 59px;

        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 50px;
        color: #2B2A29;
    }
</style>
