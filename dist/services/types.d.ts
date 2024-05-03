export interface BaseActionData<T = {}> {
    success?: boolean;
    data?: T;
    errors?: {
        [K in keyof T]?: string[];
    } & {
        base?: string[];
    };
}
export declare function isBaseActionData<T>(data: unknown): data is BaseActionData<T>;
export type ServiceError = {
    field: string;
    message: string;
};
export declare function isServiceError(error: unknown): error is ServiceError;
export type ServiceResponse<T> = {
    success: boolean;
    data: T | null;
    errors: ServiceError[];
};
export declare function isServiceResponse<T>(response: unknown): response is ServiceResponse<T>;
export type IntentHandler<T> = (formData: unknown) => Promise<ServiceResponse<T>>;
