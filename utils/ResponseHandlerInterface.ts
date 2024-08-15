/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

export interface SuccessDetail {
    message: string;
}

export interface ErrorDetail {
    message: string;
    details?: string[];
}

export interface HttpResponse {
    response: {
        status: number;
        statusText: string;
    };
    message: string;
}

export interface ValidationErrorResponse {
    response: {
        status: 422;
        statusText: string;
        data: {
            errors: Record<string, string[]>;
        };
    };
}