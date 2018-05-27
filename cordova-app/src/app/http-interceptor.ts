import {Injectable,Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpInterceptor,HttpClient,HttpRequest,HttpResponse,HttpHandler,HttpSentEvent,HttpHeaderResponse,HttpProgressEvent,HttpUserEvent} from '@angular/common/http'

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        throw new Error("Method not implemented.");
    }
}
