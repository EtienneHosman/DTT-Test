<template>
<!--
Unfortunately there is a bug with this version of Vuetify and dynamic content.
Right now the footer might overlap the content on screen. This is due it being dynamic.
I have looked at this and wanted to fix it. Due to time concerns I have decided to leave this comment here.
-->
    <v-footer  class="primary"  app fixed bottom>
        <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} - <strong> Etienne Hosman</strong>
        </v-col>
    </v-footer>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "Footer",
        data() {
            return {
                routes: []
            }
        },
    })
</script>

<style scoped>

</style>