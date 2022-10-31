import { Ventas } from '../../models/ventas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<Ventas[]>("http://localhost:8080/api/sales");
  }

  getVenta(id: number){
    return this.http.get<Ventas>("http://localhost:8080/api/sales"+"/"+id.toString());
  }

  addVenta(venta:Ventas){
    return this.http.post<Ventas>("http://localhost:8080/api/sales",venta);
  }


}
