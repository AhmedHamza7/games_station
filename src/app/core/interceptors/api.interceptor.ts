import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.url.startsWith('https://api.rawg.io')) {
    const url = new URL(req.url);
    url.searchParams.set('key', environment.apiKey);

    const updatedRequest = req.clone({ url: url.toString() });
    return next(updatedRequest);
  }

  return next(req);
};
