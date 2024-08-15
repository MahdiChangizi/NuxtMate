import { API_BASE_URL, API_CONFIG } from './connectionConfig';
import Auth from "./savedData/auth";
import axios from "axios";
import type { AxiosResponse } from "axios";
import { showToast } from '@/services/toastService';
import { errorHandler } from "@/utils/ResponseHandler";
import { useGlobalLoadingStore } from '@/stores/globalLoading';

export type requestOptionsType = { 
    data?: object, 
    headers?: object, 
    isUseLoading?: boolean, 
    loadingMessage?: string, 
    onProgress?: (uploadPercentage: number) => void 
};

class API {
    private readonly baseUrl: string;
    private readonly config: { headers: { [key: string]: any } };

    constructor(baseUrl: string, config: { headers: { [key: string]: any } }) {
        this.baseUrl = baseUrl;
        this.config = config;
    }

    private async request(url: string, method: string, options?: requestOptionsType): Promise<AxiosResponse> {
        const loadingStore = useGlobalLoadingStore();
        let toastId: string | undefined = undefined;
        
        if (!options) options = {};
        
        // مدیریت لودینگ برای درخواست‌های GET
        if (options.isUseLoading && method === 'GET') {
            loadingStore.startLoading();
        } else if (options.isUseLoading) {
            toastId =  "در حال ارسال اطلاعات";
        }

        try {
            if (options.data) {
                const data = options.data as any;
                const keys = Object.keys(data);
                const formData = new FormData();
                let hasFile = false;
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    if (data[key] instanceof File) {
                        hasFile = true;
                        formData.append(key, data[key]);
                    } else if (Array.isArray(data[key])) {
                        const array = data[key];
                        for (let j = 0; j < array.length; j++) {
                            if (array[j] instanceof File) {
                                hasFile = true;
                                formData.append(key + "[]", array[j]);
                            } else {
                                formData.append(key + "[]", array[j]);
                            }
                        }
                    } else {
                        formData.append(key, data[key]);
                    }
                }
                if (hasFile) {
                    formData.append('_method', method);
                    method = 'POST';
                    options.data = formData;
                    options.headers = {
                        ...options.headers,
                        'Content-Type': 'multipart/form-data'
                    };
                }
            }

            const headers: object = options.headers ? {...(this.config.headers as object), ...options.headers} : this.config as object;
            const response = await axios({
                url,
                method,
                data: options.data,
                headers: headers,
                onUploadProgress: (progressEvent) => {
                    const progress = (progressEvent.loaded / (progressEvent.total ?? 0)) * 100;
                    options?.onProgress && options.onProgress(progress);
                },
            });

            if (toastId) {
                showToast('dismiss', toastId);
            }
            if (method !== 'GET') {
                showToast('success', 'عملیات با موفقیت انجام شد');
            }
            return response;
        } catch (e) {
            if (toastId) {
                showToast('dismiss', toastId);
            }
            const errorDetails = errorHandler(e);
            showToast('error', errorDetails.message);
            throw e;
        } finally {
            // پایان لودینگ برای درخواست‌های GET
            if (options.isUseLoading && method === 'GET') {
                loadingStore.stopLoading();
            }
        }
    }

    public getUrlFromEndpoint(endpoint: string) {
        return `${this.baseUrl}/${endpoint}`;
    }

    public async authRequest(endpoint: string, method: string, options?: requestOptionsType) {
        const token: string = Auth.get();
        if (!options) options = {};
        options.headers = options.headers ? {...options.headers, token, Authorization: `Bearer ${token}`} : {
            token: token,
            Authorization: `Bearer ${token}`
        }
        return this.request(this.getUrlFromEndpoint(endpoint), method, options);
    }

    public async post(endpoint: string, options?: requestOptionsType) {
        return await this.request(this.getUrlFromEndpoint(endpoint), 'POST', options);
    }

    public async authPost(endpoint: string, options?: requestOptionsType) {
        return await this.authRequest(endpoint, "POST", options);
    }

    public async authGet(endpoint: string, options?: requestOptionsType): Promise<AxiosResponse<any, any>> {
        if (!options) options = {};
        if (!options.loadingMessage) options.loadingMessage = "در حال دریافت اطلاعات";
        return await this.authRequest(endpoint, "GET", options);
    }

    public async authDelete(endpoint: string, options?: requestOptionsType) {
        if (!options) options = {};
        options.loadingMessage = "در حال حذف اطلاعات";
        return await this.authRequest(endpoint, "DELETE", options);
    }

    public async get(endpoint: string, options?: requestOptionsType) {
        if (!options) options = {};
        if (!options.loadingMessage) options.loadingMessage = "در حال دریافت اطلاعات";
        return await this.request(this.getUrlFromEndpoint(endpoint), 'GET', options);
    }

    async authPut(endpoint: string, options?: requestOptionsType) {
        if (!options) options = {};
        options.loadingMessage = "در حال ویرایش اطلاعات";
        return await this.authRequest(endpoint, "PUT", options);
    }
}

const api = new API(API_BASE_URL, API_CONFIG);

export default api;
