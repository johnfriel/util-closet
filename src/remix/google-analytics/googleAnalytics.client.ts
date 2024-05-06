declare global {
  interface Window {
    gtag: (
      option: string,
      gaTrackingId: string,
      options: Record<string, unknown>,
    ) => void;
  }
}

// Helper function to safely call gtag if available
const safelyCallGtag = (command: string, action: string, params: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(command, action, params);
  } else {
    console.warn(`window.gtag is not defined. Check if Google Analytics is properly loaded.`);
  }
};

// Function to track page views
export const googleAnalyticsPageView = (url: string, trackingId: string) => {
  safelyCallGtag('config', trackingId, { page_path: url });
};

// Function to track general events
export const googleAnalyticsEvent = ({
  actionName,
  category,
  label,
  value,
}: Record<string, string>) => {
  safelyCallGtag('event', actionName, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
