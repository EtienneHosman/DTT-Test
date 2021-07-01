<template>
    <v-container>
        <v-toolbar id="toolbar" color="secondary">
                <v-toolbar-title  class="white--text">Featured Items</v-toolbar-title>
            <v-spacer/>
            <v-spacer/>
                <v-select
                        :items="departments"
                        item-text="name"
                        label="Category"
                        v-model="departmentSearch"
                        clearable
                        dense
                ></v-select>
                <v-text-field
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                        dense
                        v-model="nameSearch"
                ></v-text-field>
        </v-toolbar>
        <v-row>
            <v-col
                    v-for="item in filteredProducts"
                    :key="item.id"
            >
                <Card
                        v-on:changeProduct="productChanged"
                        :product="item"

                ></Card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">

    import Vue from "vue";
    import Card from "@/components/Card.vue";
    import {ProductService} from "@/service/ProductService.ts";
    import {DepartmentService} from "@/service/DepartmentService";
    import {Department} from "@/model/Department";
    import {Product} from "@/model/Product";


    export default Vue.extend({
        name: "Home",
        components:{
            Card
        },
        data() {
            return {
                products: [] as Product[],
                productService: new ProductService(),
                departments: [] as Department [],
                departmentService: new DepartmentService(),
                nameSearch: '',
                departmentSearch: null
                }
            },
        methods: {
            productChanged(id: string){
                this.$router.push({path:`/details/${id}`})
            }
        },
        async mounted() {
            this.products.push(new Product('aaa','Schroevendraaier','Gereedschap', 'aaa', 111, 'red', 33, 'granite', 5, 322,'', ''));
            this.products = await this.productService.getRandomProducts(10);
            this.departments = await this.departmentService.getAllDepartments();
        },
        // The if statements cover all paths. So you can select a department and search, or only department, or search
        computed: {
            filteredProducts:function (): Product[] {
                return this.products.filter((product: { name: string, department: string }) => {
                    if(this.departmentSearch != null && this.nameSearch != null){
                        return (product.name.toLowerCase().includes(this.nameSearch.toLowerCase())
                            && (product.department == this.departmentSearch ));
                    } else if(this.departmentSearch == null){
                        return (product.name.toLowerCase().includes(this.nameSearch.toLowerCase()));
                    } else if(this.departmentSearch == null && this.nameSearch == null){
                        return product
                    }
                })
            }
        }
    })
</script>

<style scoped>
 #toolbar{
     margin-bottom: 30px;
 }
</style>