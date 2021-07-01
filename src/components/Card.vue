<template>
    <v-container class="cardContainer">
        <v-card>
            <v-row>
                <v-col>
                    <v-img class="picture" v-bind:src="product.smallImg"/>
                </v-col>
                <v-col>
                    <v-card-title class="text-no-wrap">{{ product.name }}</v-card-title>
                    <v-card-subtitle align="left">{{ product.type}}</v-card-subtitle>
                    <v-rating v-bind:value="product.ratings"></v-rating>
                    <v-btn fab rounded color="secondary" v-on:click="changeProduct(product.id)"> €{{ product.price}}</v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "Card",
        props: {
            product: Object
        },
        methods: {
            changeProduct(id: string){
                this.$emit('changeProduct', id)
            }
        }
    })
</script>

<style scoped>
 .cardContainer{
     min-width: 300px;
 }
</style>