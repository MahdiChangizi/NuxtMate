/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import { API_BASE_URL, API_CONFIG } from './connectionConfig';
import Auth from "./savedData/auth";
import axios from "axios";
import type { AxiosResponse, AxiosRequestConfig, AxiosProgressEvent  } from "axios";
import { errorHandler } from "@/utils/ResponseHandler";
import { useGlobalLoadingStore } from '@/stores/globalLoading';
import { useNuxtApp } from '#app';
import CacheManager from "./cacheManager"


type RequestOptionsType = {
    data?: Record<string, any>;
    headers?: Record<string, string>;
    isUseLoading?: boolean;
    isUseCaching?: boolean;
    loadingMessage?: string;
    onProgress?: (uploadPercentage: number) => void;
};

interface ToastPlugin {
    (type: string, message: string, description?: string | null): void;
}

declare module '#app' {
    interface NuxtApp {
        $showToast?: ToastPlugin;
    }
}

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/
class ApiCacheService {
    private readonly baseUrl: string;
    private readonly config: AxiosRequestConfig;
    private cacheManager: CacheManager;

    constructor(baseUrl: string, config: AxiosRequestConfig) {
        this.baseUrl = baseUrl;
        this.config = config;
        this.cacheManager = new CacheManager();
        this.initCacheCleanup();
    }

    private async request(url: string, method: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        const { $showToast } = useNuxtApp();
        const loadingStore = useGlobalLoadingStore();

        if (options?.isUseLoading) {
            loadingStore.startLoading();
        }

        try {
            if (method === 'GET') {

                if (options?.isUseCaching) {
                    const cachedData = await this.cacheManager.get(url);
                    if (cachedData) {
                        loadingStore.stopLoading();
                        return { data: cachedData } as AxiosResponse;
                    }
                }
            }

            const axiosConfig: AxiosRequestConfig = {
                url,
                method,
                ...this.config,
                headers: { ...this.config.headers, ...options?.headers },
                onUploadProgress: options?.onProgress ? (progressEvent: AxiosProgressEvent) => {
                    const progress = (progressEvent.loaded / (progressEvent.total ?? 1)) * 100;
                    options.onProgress?.(progress);
                } : undefined,
            };

            if (options?.data) {
                axiosConfig.data = this.prepareData(options.data, method);
            }

            const response = await axios(axiosConfig);

            if (method === 'GET' && response.status === 200) {
                if (options?.isUseCaching) await this.cacheManager.set(url, response.data);
            } else if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method) && response.status === 200) {
                await this.cacheManager.remove(url);
            }

            loadingStore.stopLoading();

            if (method !== 'GET') {
                $showToast?.('success', 'عملیات با موفقیت انجام شد');
            }

            return response;
        } catch (e) {
            loadingStore.stopLoading();
            const errorDetails = errorHandler(e);
            $showToast?.('error', errorDetails.message);
            throw e;
        }
    }

    private prepareData(data: Record<string, any>, method: string): FormData | Record<string, any> {
        const formData = new FormData();
        let hasFile = false;

        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File) {
                hasFile = true;
                formData.append(key, value);
            } else if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    if (item instanceof File) {
                        hasFile = true;
                        formData.append(`${key}[]`, item);
                    } else {
                        formData.append(`${key}[]`, item);
                    }
                });
            } else {
                formData.append(key, value);
            }
        });

        if (hasFile) {
            formData.append('_method', method);
            return formData;
        }

        return data;
    }

    private initCacheCleanup(): void {
        if (typeof window !== 'undefined') {
            setInterval(async () => {
                await this.cacheManager.clear();
            }, 30 * 60 * 1000); // 30 minutes
        }
    }

    public getUrlFromEndpoint(endpoint: string): string {
        return `${this.baseUrl}/${endpoint}`;
    }

    public async authRequest(endpoint: string, method: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        const token = Auth.get();
        options = {
            ...options,
            headers: {
                ...options?.headers,
                token,
                Authorization: `Bearer ${token}`
            }
        };
        return this.request(this.getUrlFromEndpoint(endpoint), method, options);
    }

    public async post(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        return await this.request(this.getUrlFromEndpoint(endpoint), 'POST', options);
    }

    public async authPost(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        return await this.authRequest(endpoint, "POST", options);
    }

    public async authGet(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        options = {
            ...options,
            loadingMessage: options?.loadingMessage || "در حال دریافت اطلاعات"
        };
        return await this.authRequest(endpoint, "GET", options);
    }

    public async authDelete(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        options = {
            ...options,
            loadingMessage: "در حال حذف اطلاعات"
        };
        return this.authRequest(endpoint, "DELETE", options);
    }

    public async get(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        options = {
            ...options,
            loadingMessage: options?.loadingMessage || "در حال دریافت اطلاعات"
        };
        return this.request(this.getUrlFromEndpoint(endpoint), 'GET', options);
    }

    public async authPut(endpoint: string, options?: RequestOptionsType): Promise<AxiosResponse> {
        options = {
            ...options,
            loadingMessage: "در حال ویرایش اطلاعات"
        };
        return this.authRequest(endpoint, "PUT", options);
    }
}

const apiCacheService = new ApiCacheService(API_BASE_URL, API_CONFIG);

export default apiCacheService;

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/