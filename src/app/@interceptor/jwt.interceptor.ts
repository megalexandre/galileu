import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const bearer = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kcmUiLCJyb2xlIjpbIkFETUlOIl0sIm5hbWUiOiJhbGV4YW5kcmUiLCJleHAiOjE2NzUyMjA1NjV9.QnpPn5g1V_13budBJlTGzEgIgecLj6xzkh136dj0qsMV_GUjA54YtZGk5EsXUr9k-9B5Q7VWyedybgKrwsDEYw"

          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${bearer}`
              }
          });

        return next.handle(request);
    }
}
