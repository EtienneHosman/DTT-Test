<template>
    <div>
        <DetailedCard v-on:changeProduct="productChanged" :card-info="detailedCard"/>
        <v-btn v-on:click="randomize" x-large color="primary">Randomize!</v-btn>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import DetailedCard from "@/components/DetailedCard.vue";
    import {ProductService} from "@/service/ProductService.ts";
    import {Product} from "@/model/Product";

    export default Vue.extend({
        name: "Randomizer",
        components: {DetailedCard},
        data(){
            return {
                detailedCard: {} as Product,
                productService: new ProductService(),
            }
        },
        methods: {
            async randomize():Promise<void>
            {
                const response = await this.productService.getRandomProducts();
                this.detailedCard = response[0];
            },
            productChanged(id: string){
                this.$router.push({path:`/details/${id}`});

            }
        },
        created() {
            this.randomize();
        }
    })
</script>

<style scoped>

</style>