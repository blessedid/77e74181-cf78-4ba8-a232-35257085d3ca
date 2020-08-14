<template>
    <div>
        <MenuHeader />
        <v-content>
            <v-container>
                <h1>404 Page not found</h1>
            </v-container>
        </v-content>
        <Footer />
    </div>
</template>

<script>
    import MenuHeader from "./MenuHeader";
    import Footer from "./public/Footer";

    export default {
        name: "NotFoundComponent",
        components: {MenuHeader, Footer}
    }
</script>

<style scoped>

</style>
