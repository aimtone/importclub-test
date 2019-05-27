import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  constructor(private http: HttpClient) { }

  async obtenerProductos() {
    return await this.http.get<any>("https://testapi.io/api/hilderh/products/home").toPromise()
      .catch(err => {
        this.atraparError(err)
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
