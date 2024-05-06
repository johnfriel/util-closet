// Helper function to safely call gtag if available
const safelyCallGtag = (command, action, params) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag(command, action, params);
    }
    else {
        console.warn(`window.gtag is not defined. Check if Google Analytics is properly loaded.`);
    }
};
// Function to track page views
export const googleAnalyticsPageView = (url, trackingId) => {
    safelyCallGtag('config', trackingId, { page_path: url });
};
// Function to track general events
export const googleAnalyticsEvent = ({ actionName, category, label, value, }) => {
    safelyCallGtag('event', actionName, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
