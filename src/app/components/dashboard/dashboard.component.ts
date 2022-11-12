import { Stock } from './../../models/stock';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from './../../services/sales/ventas.service';
import { StoresService } from './../../services/stores/stores.service';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/clients/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idStore!: number;
  ventaTotal:number=0;
  stockTotal:number=0;
  displayedColumns: string[] = ['nameProduct', 'units', 'img'];
  dataSource = new MatTableDataSource<Stock>();
  
  constructor(private  ventasService:VentasService, private ActivatedRoute: ActivatedRoute, storesService: StoresService) { }

  ngOnInit(): void {

  this.idStore = this.ActivatedRoute.snapshot.params['id'];

  this.ventasService.getTotalSales(this.idStore).subscribe(
    (data:any)=>{
      this.ventaTotal=data; 
  })

  this.ventasService.getTotalStock(this.idStore).subscribe(
    (data:any)=>{
      this.stockTotal=data; 
  }
)

}

}
