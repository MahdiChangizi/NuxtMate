import type {SuccessDetail, ErrorDetail, HttpResponse, ValidationErrorResponse} from "./ResponseHandlerInterface";

const handleValidationError = (response: ValidationErrorResponse['response']): ErrorDetail => {
    const errors = response.data.errors;
    const firstError = Object.values(errors).flat()[0];
    return {
        message: firstError || "خطای ناشناخته",
        details: firstError ? [firstError] : [],
    };
};

const handleHttpError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: `خطای HTTP: ${response.status}`,
        details: [response.statusText],
    };
};

const handleGenericError = (error: { message: string }): ErrorDetail => {
    return {
        message: 'یک خطای غیرمنتظره رخ داده است',
        details: [error.message],
    };
};

const handleNotFoundError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: 'خطای 404: صفحه مورد نظر یافت نشد',
        details: [response.statusText],
    };
};

const handleServerError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: 'خطای سرور داخلی (500)',
        details: [response.statusText],
    };
};

const handleUnauthorizedError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: 'خطای 401: دسترسی غیرمجاز - لطفاً وارد شوید',
        details: [response.statusText],
    };
};

const handleForbiddenError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: 'خطای 403: دسترسی ممنوع - شما اجازه دسترسی به این منبع را ندارید',
        details: [response.statusText],
    };
};

const handleRedirectError = (response: HttpResponse['response']): ErrorDetail => {
    return {
        message: 'خطای 302: انتقال موقت - منبع به آدرس جدید منتقل شده است',
        details: [response.statusText],
    };
};

export const errorHandler = (error: any): ErrorDetail => {
    if (error.response) {
        switch (error.response.status) {
            case 422:
                return handleValidationError(error.response);
            case 404:
                return handleNotFoundError(error.response);
            case 500:
                return handleServerError(error.response);
            case 401:
                return handleUnauthorizedError(error.response);
            case 403:
                return handleForbiddenError(error.response);
            case 302:
                return handleRedirectError(error.response);
            default:
                return handleHttpError(error.response);
        }
    }
    return handleGenericError(error);
};

export const successHandler = (message: string|null): SuccessDetail => {
    return {
        message: message ?? 'عملیات با موفقیت انجام شد'
    };
};
