export interface BaseActionData<T = {}> {
  success?: boolean;
  data?: T;
  errors?: {
    [K in keyof T]?: string[];
  } & {
    base?: string[];
  };
}

export type ServiceError = {
  field: string;
  message: string;
};

export type ServiceResponse<T> = {
  success: boolean;
  data: T | null;
  errors: ServiceError[];
};

export type IntentHandler<T> = (formData: unknown) => Promise<ServiceResponse<T>>;