import {Department} from "@/model/Department";
import {ProductService} from "@/service/ProductService";
import {Product} from "@/model/Product";
import axios from "axios";

export class DepartmentService{
    private resourceLocation: string;
    private apiKey: string;
    private productService: ProductService;

    constructor() {
        this.resourceLocation = 'https://dummyproducts-api.herokuapp.com/api/v1/departments/';
        this.apiKey = "1o8wujr2F0_4"; // For ease of access I decided to make this public instead of making this a secret const.
        this.productService = new ProductService();
    }

    async getAllDepartments():Promise<Department[]>{
        const response = await axios.get(`${this.resourceLocation}`, {params:{apikey:this.apiKey}})
        const departmentData = response.data.data;
        const departmentList: Department[] = [];

        departmentData.forEach((department:any) => {
            departmentList.push(this.mapAxiosResponseToDepartment(department))
        })
        return departmentList;
    }
    async getProductsFromDepartment(departmentId:string):Promise<Product[]>{
        const response = await axios.get(`${this.resourceLocation}` + departmentId, {params:{apikey:this.apiKey}})
        const productData = response.data.data;
        const productList: Product[] = [];

        productData.forEach((product:any) =>
        {
          productList.push(this.productService.mapAxiosResponseToProduct(product));
        })
        return productList;
    }

    private mapAxiosResponseToDepartment(departmentData:any):Department {
        return new Department(
            departmentData.department_id,
            departmentData.department_name,
            departmentData.department_numProducts
        )
    }
}