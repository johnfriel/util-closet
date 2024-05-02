export declare function isError(e: unknown): e is Error;
export declare function logError(error: unknown, context: string, additionalInfo?: Record<string, unknown>): void;
export declare function handleError(error: unknown, context: string, additionalInfo?: Record<string, unknown>): Error;
