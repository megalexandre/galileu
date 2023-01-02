import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import transaction from '@core/data/mock/transaction.json'
import planAccount from '@core/data/mock/planAccount.json'
import { BarItem } from '@model/bar-item';


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor(public http: HttpClient) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, } = request;


      switch (true) {

        case url.includes(environment.management.router) && method === 'GET':{
          return this.ok(transaction.transactions)
        }

        case url.includes(environment.dashboard.routers.planAccount.analytical) && method === 'GET':{
          return this.ok(getRandonData(planAccount.planAcount.analytical.data))
        }

        case url.includes(environment.dashboard.routers.planAccount.synthetic) && method === 'GET':{
          return this.ok(getRandonData(planAccount.planAcount.synthetic.data))
        }

        default:
          return next.handle(request);
    }
  }

  private ok(body?: any): Observable<HttpResponse<any>> {
    return of(new HttpResponse({ status: 200, body })).pipe(delay(getRandomArbitrary(0,1000)))
  }

}

function getRandonData(barItem: BarItem[]): BarItem[]{
  return barItem.map(b => ({
    name: b.name,
    value: getRandomArbitrary(0,100)
  }))
}


function getRandomArbitrary(min: number = 0, max: number = 10000 ): number {
  return (Math.random() * (min - max) + min);
}
