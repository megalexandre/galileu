import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const bearer = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kcmUiLCJyb2xlIjpbIkFETUlOIl0sIm5hbWUiOiJhbGV4YW5kcmUiLCJleHAiOjE2NzUyNzgzODF9.t-1A8yR_bgBp62mmG8LaFRAN5pLfO64ZS6okA15i00UfdSSjaHmZswXn09l4ZgKAtGMu_5XWkVN5Bzxae2sARw"

          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${bearer}`
              }
          });

        return next.handle(request);
    }
}
