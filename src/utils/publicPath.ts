export const PUBLIC_URL = (import.meta as any).env.BASE_URL.replace(/\/$/, "");

export const publicPath = (path: string) => `${PUBLIC_URL}${path}`;
