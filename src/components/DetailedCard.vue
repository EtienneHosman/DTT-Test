<template>
    <div class="card">
        <v-card>
            <v-container>
                <v-row>
                    <!-- Create two columns, one with the picture and the other with information-->
                    <v-col>
                        <v-img class="picture" v-bind:src="cardInfo.largeImg"/>
                    </v-col>

                    <v-col>
                        <v-card-title class="primary--text , text-no-wrap"> {{ cardInfo.name }}</v-card-title>
                        <v-card-subtitle align="left">{{cardInfo.type}}</v-card-subtitle>
                        <v-card-subtitle align="left">{{cardInfo.stock}} left in stock</v-card-subtitle>
                        <v-list>
                            <v-list-item>
                                <strong>Department</strong>: {{cardInfo.department}}
                            </v-list-item>
                            <v-list-item>
                                <strong>Color: </strong>{{cardInfo.color}}
                            </v-list-item>
                            <v-list-item>
                                <strong>Material: </strong> {{cardInfo.material}}
                            </v-list-item>
                            <v-list-item>
                                <strong>Rating: </strong>
                                <v-rating
                                        readonly
                                        length="5"
                                        size="24"
                                        v-bind:value="cardInfo.ratings"
                                />
                            </v-list-item>
                            <v-list-item>
                                <strong>Sales: </strong> {{cardInfo.sales}}
                            </v-list-item>
                        </v-list>
                        <v-btn
                                large
                                color="secondary"
                                rounded
                                x-large
                                v-on:click="changeProduct(cardInfo.id)">
                            €{{cardInfo.price}}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    export default Vue.extend({
        name: "DetailedCard",
        props: {
            cardInfo: Object
        },
        methods: {
            changeProduct(id: string){
                this.$emit('changeProduct', id)
            }
        }
    })
</script>

<style scoped>
    .card {
        margin-bottom: 60px;
    }
    .picture{
        max-width: 400px;
        max-height: 500px;
    }

</style>