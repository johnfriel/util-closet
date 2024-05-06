declare global {
    interface Window {
        gtag: (option: string, gaTrackingId: string, options: Record<string, unknown>) => void;
    }
}
export declare const googleAnalyticsPageView: (url: string, trackingId: string) => void;
export declare const googleAnalyticsEvent: ({ actionName, category, label, value, }: Record<string, string>) => void;
