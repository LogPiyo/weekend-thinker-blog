// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  // もしルートが見つからず、/404 にリダイレクトされた場合などを想定して、
  // Bodyの中身を見て判断する（任意：html構造をマッチさせる）
  const is404 = context.url.pathname === '/404' || response.headers.get('x-astro-is404') === 'true';

  if (is404 || (response.status === 200 && context.url.pathname !== '/' && response.body)) {
    return new Response(response.body, {
      status: 404,
      headers: response.headers,
    });
  }

  return response;
};
