/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import type { AxiosResponse } from "axios";

export interface LaravelPaginationInterface {
    current_page: number;
    last_page?: number;
    total?: number;
}


const extractPaginationKeys = async (response: Promise<AxiosResponse>): Promise<LaravelPaginationInterface> => {
    const { data } = await response;

    let paginationData: any;

    if (data.current_page !== undefined) paginationData = data;
    else if (data.meta?.current_page !== undefined) paginationData = data.meta;
    else if (data.pagination?.current_page !== undefined) paginationData = data.pagination;
    else throw new Error("current_page not found in the response");
    

    return {
        current_page: paginationData.current_page,
        last_page: paginationData.last_page,
        total: paginationData.total,
    };
};

