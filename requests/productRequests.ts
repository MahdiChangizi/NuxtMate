/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import API from "@/services/api";
import type {AxiosResponse} from "axios";

class ProductRequests {

    public static async getAll(): Promise<AxiosResponse> {
        return await API.authGet(`product`,  {isUseLoading: true});
    }

    // public static async getProductById(id: number): Promise<AxiosResponse> {
    //     return await API.get("products/" + id, {isUseLoading: true});
    // }


    static async create(data: any): Promise<AxiosResponse> {
        return await API.authPost('product', {data: data, isUseLoading: true});
    }

    // static async remove(id: number): Promise<AxiosResponse> {
    //     return await API.authDelete(`products/${id}`, {isUseLoading: true});
    // }

    // static async update(credentials: ProductUpdateCredentials): Promise<AxiosResponse> {
    //     return await API.authPut(`products/${credentials.id}`, {
    //         data: convertObjectOfCamelCaseToObjectOfKeyBySnakeCase(credentials, ['id']),
    //         isUseLoading: true,
    //     });
    // }
}



export default ProductRequests;