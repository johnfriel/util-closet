export function isBaseActionData(data) {
    return (typeof data === 'object' &&
        data !== null &&
        'success' in data &&
        'data' in data &&
        'errors' in data &&
        typeof data.success === 'boolean' &&
        (data.data === undefined || typeof data.data === 'object') &&
        typeof data.errors === 'object');
}
export function isServiceError(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'field' in error &&
        'message' in error &&
        typeof error.field === 'string' &&
        typeof error.message === 'string');
}
export function isServiceResponse(response) {
    return (typeof response === 'object' &&
        response !== null &&
        'success' in response &&
        'data' in response &&
        'errors' in response &&
        typeof response.success === 'boolean' &&
        (response.data === null || typeof response.data === 'object') &&
        Array.isArray(response.errors));
}
