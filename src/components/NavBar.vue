
<template>
    <div class="navbarTop">
            <v-app-bar fixed dense color="primary">
                <v-app-bar-nav-icon class="white--text" @click="drawer = true"/>
                <v-toolbar-title class="white--text">DTT-Test</v-toolbar-title>
            </v-app-bar>

            <v-navigation-drawer
                    v-model="drawer"
                    fixed
                    temporary>
                <v-list
                        nav
                        dense>
                        <v-list-item v-on:click="buttonClicked('')">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>

                        <v-list-item v-on:click="buttonClicked('random')">
                            <v-list-item-icon>
                                <v-icon>mdi-autorenew</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Randomizer</v-list-item-title>
                        </v-list-item>

                        <v-list-item v-on:click="buttonClicked('details')">
                            <v-list-item-icon>
                                <v-icon>mdi-clipboard-text</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Details</v-list-item-title>
                        </v-list-item>

                </v-list>
            </v-navigation-drawer>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "Sidebar",
        methods: {
            buttonClicked(param:string) {
                this.$router.push(`/${param}`)
            },
        },
        data: () => ({
          drawer: false,
            group: null
        })
    })
</script>

<style scoped>
.navbarTop{
    margin-bottom: 30px;
}

</style>