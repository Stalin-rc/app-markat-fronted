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

  /* 
  getProducto(id: number) {
    return this.http.get<Producto>('http://localhost:3000/Productos/' + id);
  }


  deleteProducto(id: number) {
    return this.http.delete<Producto>('http://localhost:3000/Productos/' + id);
  }

  addProducto(producto: Producto) {
    return this.http.post<Producto>('http://localhost:3000/Productos', producto);
  }

  editProducto(producto: Producto) {
    return this.http.put<Producto>('http://localhost:3000/Productos/'+producto.id, producto);
  }*/
}
