// app/utils/errorLogging.ts

export function isError(e: unknown): e is Error {
  return e instanceof Error;
}

export function logError(error: unknown, context: string, additionalInfo: Record<string, unknown> = {}): void {
  if (isError(error)) {
    console.error(`[${new Date().toISOString()}] Error in ${context}: `, {
      message: error.message,
      stack: error.stack,
      ...additionalInfo
    });
  } else {
    console.error(`[${new Date().toISOString()}] Unknown error in ${context}: `, error);
  }
}

export function handleError(error: unknown, context: string, additionalInfo: Record<string, unknown> = {}): Error {
  logError(error, context, additionalInfo);

  if (isError(error)) {
    return new Error(`Error in ${context}: ${error.message}`);
  } else {
    return new Error(`Unknown error occurred in ${context}`);
  }
}