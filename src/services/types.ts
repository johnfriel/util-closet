export interface BaseActionData<T = {}> {
  success?: boolean;
  data?: T;
  errors?: {
    [K in keyof T]?: string[];
  } & {
    base?: string[];
  };
}

export function isBaseActionData<T>(data: unknown): data is BaseActionData<T> {
  return (
    typeof data === 'object' &&
    data !== null &&
    'success' in data &&
    'data' in data &&
    'errors' in data &&
    typeof (data as BaseActionData<T>).success === 'boolean' &&
    ((data as BaseActionData<T>).data === undefined || typeof (data as BaseActionData<T>).data === 'object') &&
    typeof (data as BaseActionData<T>).errors === 'object'
  );
}

export type ServiceError = {
  field: string;
  message: string;
};

export function isServiceError(error: unknown): error is ServiceError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'field' in error &&
    'message' in error &&
    typeof (error as ServiceError).field === 'string' &&
    typeof (error as ServiceError).message === 'string'
  );
}

export type ServiceResponse<T> = {
  success: boolean;
  data: T | null;
  errors: ServiceError[];
};

export function isServiceResponse<T>(response: unknown): response is ServiceResponse<T> {
  return (
    typeof response === 'object' &&
    response !== null &&
    'success' in response &&
    'data' in response &&
    'errors' in response &&
    typeof (response as ServiceResponse<T>).success === 'boolean' &&
    ((response as ServiceResponse<T>).data === null || typeof (response as ServiceResponse<T>).data === 'object') &&
    Array.isArray((response as ServiceResponse<T>).errors)
  );
}

export type IntentHandler<T> = (formData: unknown) => Promise<ServiceResponse<T>>;