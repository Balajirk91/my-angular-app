import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

@Injectable()
export class IntercInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    const urlchange=request.clone({
      url:"http://localhost:3000/"+request.url,
      headers:request.headers.set('authentication','@123')
    })
    return next.handle(urlchange)
    .pipe(
      tap(
        result=>{
           console.log("data saved",result);
         },
         error=>{
           console.log("error",error);
         }),
        catchError((error:HttpErrorResponse)=>{
          alert(`HTTP Error: ${request.url}`);
          return throwError(error);
        })
      )
 }
}
