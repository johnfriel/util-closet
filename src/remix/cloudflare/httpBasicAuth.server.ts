import { AppLoadContext } from '@remix-run/cloudflare'

// Defining the interface for the environment variables
interface Env {
  BASIC_AUTH_USER: string;
  BASIC_AUTH_PASS: string;
}
function isEnv(env: any): env is Env {
  return env.BASIC_AUTH_USER && env.BASIC_AUTH_PASS;
}
declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    cloudflare: {
      env: Env
    };
  }
}

export const basicAuthHeaders = {
  "WWW-Authenticate": "Basic realm=\"Staging environment for staff only\", charset=\"UTF-8\"",
};

// Use TextEncoder and Web Crypto API to perform a timing-safe comparison
async function timingSafeEqual(a: string, b: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const aBuffer = encoder.encode(a);
  const bBuffer = encoder.encode(b);

  if (aBuffer.byteLength !== bBuffer.byteLength) {
    return false;
  }

  const digestA = await crypto.subtle.digest("SHA-256", aBuffer);
  const digestB = await crypto.subtle.digest("SHA-256", bBuffer);

  const viewA = new DataView(digestA);
  const viewB = new DataView(digestB);
  let result = 0;
  for (let i = 0; i < viewA.byteLength; i++) {
    result |= viewA.getUint8(i) ^ viewB.getUint8(i);
  }
  return result === 0;
}

export async function isHttpBasicAuthorized({ request, context }: { request: Request; context: AppLoadContext }): Promise<boolean> {
  const header = request.headers.get("Authorization");
  if (!header) {
    return false;
  }

  const env = context.cloudflare.env as Env;
  if (!isEnv(env)) { 
    console.error("Basic Auth credentials not set in environment");
    return false;
  }

  const basicAuthUser = env.BASIC_AUTH_USER;
  const basicAuthPass = env.BASIC_AUTH_PASS;

  const [scheme, encoded] = header.split(" ");

  // The Authorization header must start with Basic, followed by a space.
  if (!encoded || scheme !== "Basic") {
    return false;
  }

  const credentials = atob(encoded);
  const index = credentials.indexOf(":");
  if (index === -1) {
    return false;
  }

  const user = credentials.substring(0, index);
  const pass = credentials.substring(index + 1);

  return await timingSafeEqual(basicAuthUser, user) && await timingSafeEqual(basicAuthPass, pass);
};