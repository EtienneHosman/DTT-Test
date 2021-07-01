import {Product} from "@/model/Product";
import axios from "axios";

export class ProductService{
    private resourceLocation: string;
    private apiKey: string;

    constructor() {
        this.resourceLocation = 'https://dummyproducts-api.herokuapp.com/api/v1/products';
        this.apiKey = "1o8wujr2F0_4"; // For ease of access I decided to make this public instead of making this a secret const.
    }

    async getRandomProducts(itemLimit?: number):Promise<Product[]> {
        let limitItem = itemLimit;
        if(limitItem == 0){
            limitItem = 1
        }
        const response = await axios.get(`${this.resourceLocation}/random`, {params:{apikey:this.apiKey, limit:limitItem, timestamp:new Date().getTime()}})
        const productsData = response.data.data;
        const productsList: Product[] = [];

        productsData.forEach((product : any) => {
            productsList.push(this.mapAxiosResponseToProduct(product))
        })

        return productsList;
    }
    async getAllProducts():Promise<Product[]>{
        const response = await axios.get(`${this.resourceLocation}`, {params:{apikey:this.apiKey, limit:9999,timestamp:new Date().getTime()}})
        const productsData = response.data.data;
        const productList: Product[] = [];

        productsData.forEach((product : any) => {
            productList.push(this.mapAxiosResponseToProduct(product))
        })
        return productList;
    }
    async getTenProducts():Promise<Product[]>{
        const response = await axios.get(`${this.resourceLocation}`, {params:{apikey:this.apiKey, limit:10,timestamp:new Date().getTime()}})
        const productsData = response.data.data;
        const productList: Product[] = [];

        productsData.forEach((product : any) => {
            productList.push(this.mapAxiosResponseToProduct(product))
        })
        return productList;
    }
    async getProduct(id:string):Promise<Product>{
        const response = await axios.get(`${this.resourceLocation}/` + id,{
            params:{
                apikey:this.apiKey,
                timestamp:new Date().getTime()
            }
        })
        const productData = response.data.data;
        return this.mapAxiosResponseToProduct(productData);
    }
    async getSimiliarProducts(id: string):Promise<Product[]> {
        const response = await axios.get(`${this.resourceLocation}/` + id, {
            params: {
                apikey: this.apiKey,
                timestamp: new Date().getTime(),
                similarities: true
            }
        })
        const productsData = response.data.data.product_similar;
        const productlist: Product[] = [];


        productsData.slice(-3).forEach((product: any) => {
            productlist.push(this.mapAxiosResponseToProduct(product))
        })
        return productlist;
    }

    public mapAxiosResponseToProduct(productData:any):Product {
        return new Product(
            productData._id,
            productData.product_name,
            productData.product_type,
            productData.product_department,
            productData.product_stock,
            productData.product_color,
            productData.product_price,
            productData.product_material,
            productData.product_ratings,
            productData.product_sales,
            productData.product_image_lg,
            productData.product_image_sm
        )
    }
}