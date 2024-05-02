import * as z from 'zod';
import { ServiceError, ServiceResponse } from './types';
export declare const createSuccessResponse: <T>(data: T) => ServiceResponse<T>;
export declare const createErrorResponse: (errors: ServiceError[]) => ServiceResponse<never>;
export declare const validateFormData: <T>(schema: z.Schema<T>, formData: unknown) => T;
