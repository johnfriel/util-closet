// src/index.ts
////////////////
// COMPONENTS //
// REMIX
export { NavMenu } from './remix/base/components/nav/NavMenu.js';
export { GoogleTagInitialization } from './remix/google-analytics/GoogleTagInitialization.js';
export { googleAnalyticsPageView, googleAnalyticsEvent } from './remix/google-analytics/googleAnalytics.client.js';
// REMIX-CLOUDFLARE
export { basicAuthHeaders, isHttpBasicAuthorized } from './remix/cloudflare/httpBasicAuth.server.js';
// UTILS
export { logError, handleError } from './utils/errorLogging.js';
// SERVICES
export { isBaseActionData, isServiceError, isServiceResponse } from './services/types.js';
export { validateFormData, createErrorResponse, createSuccessResponse } from './services/base.js';
