import * as z from 'zod';

import { BaseActionData, ServiceError, ServiceResponse, IntentHandler } from './types'; 

export const createSuccessResponse = <T>(data: T): ServiceResponse<T> => ({
  success: true,
  data,
  errors: [],
});

export const createErrorResponse = (errors: ServiceError[]): ServiceResponse<never> => ({
  success: false,
  data: null,
  errors,
});

export const validateFormData = <T>(schema: z.Schema<T>, formData: unknown): T => {
  try {
    return schema.parse(formData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(({ path, message }) => ({
        field: path.join('.'),
        message,
      }));
      throw createErrorResponse(errors);
    }
    throw error;
  }
};