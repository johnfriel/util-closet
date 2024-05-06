export function GoogleTagInitialization(props: { gaTrackingId: string }) {
  const { gaTrackingId } = props;

  if (!gaTrackingId) {
    console.error(
      'GoogleTagInitialization.tsx: gaTrackingId is required',
    );
    return null;
  } else {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
        />
        <script
          async
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </>
    )
  }
}