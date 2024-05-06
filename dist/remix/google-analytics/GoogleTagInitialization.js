import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
export function GoogleTagInitialization(props) {
    const { gaTrackingId } = props;
    if (!gaTrackingId) {
        console.error('GoogleTagInitialization.tsx: gaTrackingId is required');
        return null;
    }
    else {
        return (_jsxs(_Fragment, { children: [_jsx("script", { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}` }), _jsx("script", { async: true, id: "gtag-init", dangerouslySetInnerHTML: {
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `,
                    } })] }));
    }
}
