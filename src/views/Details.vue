<template>
    <v-container>

        <detailed-card
                v-on:changeProduct="changeProduct"
                v-bind:card-info="detailedCard"/>

        <h2 class="text-h5">You might also like these products...</h2>
        <v-row>
            <v-col v-for="item in cardItems" :key="item.id">
                <card v-on:changeProduct="changeProduct" :product="item"></card>
            </v-col>

        </v-row>
    </v-container>

</template>

<script lang="ts">
    import Vue from "vue";

    import DetailedCard from "@/components/DetailedCard.vue";
    import Card from "@/components/Card.vue";
    import {ProductService} from "@/service/ProductService.ts";
    import {Product} from "@/model/Product";

    export default Vue.extend({
        name: "Details",
        components: {Card, DetailedCard},
        data(){
            return{
                refId: "",
                cardItems: [] as Product[],
                detailedCard: {} as Product,
                productService: new ProductService(),
            }
        },
        props: {

        },
        methods:{

            changeProduct(refId: string){
                if(this.refId !== refId){
                    this.refId = refId;
                    this.$router.push({path:`/details/${refId}`});
                    this.productChanged(this.refId)
                }

            },
            async productChanged(refId: string){
                this.detailedCard = await this.productService.getProduct(refId);
                this.cardItems = await this.productService.getSimiliarProducts(refId);
            }

        },
        async mounted(){
            this.refId = this.$route.params.id
            if(this.refId == undefined){
                const response = await this.productService.getRandomProducts(1);
                this.detailedCard = response[0];
                this.refId = this.detailedCard.id;

                this.cardItems = await this.productService.getSimiliarProducts(this.refId);
            }else{
                this.productChanged(this.refId);
            }
        }
    })
</script>

<style scoped>

</style>