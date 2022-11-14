import { Producto } from '../../models/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {

  }

  getProductos() {
    return this.http.get<Producto[]>('http://localhost:8080/api/products');
  }

  getProducto(id:number) {
    return this.http.get<Producto>('http://localhost:8080/api/products/' + id);
  }
  
getProductByIdStore(id:number)
{
  return this.http.get<Producto[]>('http://localhost:8080/api/user/' + id+'/products');
}

}
