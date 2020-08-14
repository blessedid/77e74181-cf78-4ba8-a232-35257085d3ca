<template>
    <div class="page-public">
        <MenuHeader />
        <v-main>
            <PublicPages />
        </v-main>
        <Footer />
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/PublicPages.vue'
    import PublicPages from "@/components/PublicPages";
    import MenuHeader from "@/components/MenuHeader";
    import Footer from "@/components/public/Footer";

    export default {
        name: 'Home',
        components: {PublicPages, MenuHeader, Footer},
        data: () => ({
        })
    }
</script>

<style>
    .sting-menu {
        background: #495865;
        height: 30px;
        position: fixed;
        width: 100%;
        z-index: 1;
    }

    .v-dialog .v-dialog--active .v-bottom-sheet {
        align-self: flex-start !important;
        background: red;
    }

    .ul-menu {
        list-style-type: none;
        padding-left: 0;
    }
</style>
