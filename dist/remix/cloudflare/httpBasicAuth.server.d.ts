import { AppLoadContext } from '@remix-run/cloudflare';
interface Env {
    BASIC_AUTH_USER: string;
    BASIC_AUTH_PASS: string;
}
declare module '@remix-run/cloudflare' {
    interface AppLoadContext {
        cloudflare: {
            env: Env;
        };
    }
}
export declare const basicAuthHeaders: {
    "WWW-Authenticate": string;
};
export declare function isHttpBasicAuthorized({ request, context }: {
    request: Request;
    context: AppLoadContext;
}): Promise<boolean>;
export {};
