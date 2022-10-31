import { Bodegueros } from '../../models/bodegueros';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BodeguerosService {


  constructor(private http: HttpClient) { }

  getBodegueros() {
    return this.http.get<Bodegueros[]>('http://localhost:8080/api/Bodegueros');
  }

  getBodeguero(id: number) {
    return this.http.get<Bodegueros>(`http://localhost:8080/api/Bodegueros/${id}`);
  }

  addBodeguero(Bodegueros:Bodegueros){
    return this.http.post<Bodegueros>("http://localhost:8080/api/Bodegueros",Bodegueros);
  }


}
