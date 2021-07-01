<template>
    <v-container>
        <h2 class="text--primary">Oh no! Can't find this page!</h2>
        <h3 class="text--secondary">Want to go back home?</h3>
        <br>
        <v-btn class="secondary" @click="redirectToHome">Click here!</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "NotFound",
        methods:{
            redirectToHome() {
                this.$router.push(({path:`/`}))
            }
        }
    }
</script>

<style scoped>

</style>