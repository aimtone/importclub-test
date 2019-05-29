import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Response } from '../class/response';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private http: HttpClient) { }

  async obtenerProductos() {
    return await this.http.get<Response>("https://testapi.io/api/hilderh/products/home").toPromise()
      .catch(err => {
        this.atraparError(err);
        return new Response();
      })
  }

  private atraparError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(error.error.message);
    } else {
      console.log(error.status, error.error);
    }
    return throwError("Ha ocurrido un error, intenta nuevamente");
  }
}
