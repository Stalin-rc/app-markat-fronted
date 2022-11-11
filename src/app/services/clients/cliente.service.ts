import { Cliente } from '../../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(id:number) {
    return this.http.get<Cliente[]>('http://localhost:8080/api/user/' + id +'/clients');
  }
  addCliente(cliente: Cliente) {
    return this.http.post<Cliente>('http://localhost:8080/api/clients', cliente);
  }

  GetTotalCredits() {
    return this.http.get('http://localhost:8080/api/clients/credits');
  }

  /*
  getclente(id: number) {
    return this.http.get<Cliente>('http://localhost:3000/Cliente/' + id);
  }


  deleteCliente(id: number) {
    return this.http.delete<Cliente>('http://localhost:3000/Cliente/' + id);
  }

  

  editCliente(cliente: Cliente) {
    return this.http.put<Cliente>('http://localhost:3000/Cliente/'+cliente.id, cliente);
  }*/
}
