import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the TransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportProvider {

  public API = "http://localhost:8081";
  public TRANSPORT_CRUD_API = "/transport";

  constructor(public http: HttpClient) {
    console.log('Hello TransportProvider Provider');
  }

  getTransports(): Observable<any> {
    return this.http.get(this.API+this.TRANSPORT_CRUD_API+"/")
      .map((response: Response) => 
        response
      );
  }

  getTransportById(idTransport): Observable<any> {
    return this.http.get(this.API+this.TRANSPORT_CRUD_API+"/"+idTransport)
      .map((response: Response) => 
        response
      );
  }

  save(transport: any): Observable<any> {
    let result: Observable<any>;
    if (transport['id']) {
      result = this.http.put(this.API+this.TRANSPORT_CRUD_API+"/"+transport.id, transport);
    } else {
      result = this.http.post(this.API+this.TRANSPORT_CRUD_API+"/", transport)
    }
    return result.map((response: Response) => response);
  }

  remove(idTransport): Observable<any> {
    return this.http.delete(this.API+this.TRANSPORT_CRUD_API+"/"+idTransport)
      .map((response: Response) => 
        response
      );
  }

}
