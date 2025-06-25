import { HttpInterceptorFn } from '@angular/common/http';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.url.startsWith('https://api.rawg.io')) {
    const url = new URL(req.url);
    url.searchParams.set('key', 'f578ec91c934466faff2d811f1787d56');

    const updatedRequest = req.clone({ url: url.toString() });
    return next(updatedRequest);
  }

  return next(req);
};
