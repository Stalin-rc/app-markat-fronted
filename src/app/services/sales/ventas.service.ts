import { Ventas } from '../../models/ventas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas(id: number){
    return this.http.get<Ventas[]>('http://localhost:8080/api/user/' + id +'/sales');
  }

  getVenta(id: number){
    return this.http.get<Ventas>("http://localhost:8080/api/sales"+"/"+id.toString());
  }

  addVenta(venta:Ventas){
    return this.http.post<Ventas>('http://localhost:8080/api/sales',venta);
  }


  /* PRECIO TOTAL */
  getTotalSales(id: number) {
    return this.http.get('http://localhost:8080/api/sales/total/' +id );
  }

  getTotalStock(id: number) {
    return this.http.get('http://localhost:8080/api/stock/total/' +id );
  }


}
