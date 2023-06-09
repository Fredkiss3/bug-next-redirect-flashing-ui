import type { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

declare module "next/headers" {
  export function cookies(): ResponseCookies;
}
