// src/index.ts

////////////////
// COMPONENTS //

// REMIX
export { GoogleTagInitialization } from './remix/google-analytics/GoogleTagInitialization.jsx';
export { googleAnalyticsPageView, googleAnalyticsEvent } from './remix/google-analytics/googleAnalytics.client.js';

// UTILS
export { logError, handleError } from './utils/errorLogging.js';

// SERVICES
export { 
  BaseActionData, isBaseActionData, ServiceError, isServiceError, ServiceResponse, isServiceResponse, IntentHandler
} from './services/types.js';
export { validateFormData, createErrorResponse, createSuccessResponse } from './services/base.js';