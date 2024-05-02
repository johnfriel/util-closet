import * as z from 'zod';
export const createSuccessResponse = (data) => ({
    success: true,
    data,
    errors: [],
});
export const createErrorResponse = (errors) => ({
    success: false,
    data: null,
    errors,
});
export const validateFormData = (schema, formData) => {
    try {
        return schema.parse(formData);
    }
    catch (error) {
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
