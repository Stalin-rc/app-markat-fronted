import { StoresService } from '../../services/stores/stores.service';
import { Stores } from '../../models/stores';
import { VentasService } from './../../services/sales/ventas.service';
import { Ventas } from './../../models/ventas';
import { Component, OnInit, NgModule } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  displayedColumns: string[] = ["cliente", "productos", "precioTotal","credito","fechaVenta","comprobante"];
  dataSource = new MatTableDataSource<Ventas>();
  idStore!: number;
  idVentas!: number; 

  constructor(private ventaService: VentasService,
              private activetedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.idStore = this.activetedRoute.snapshot.params['id'];
    this.getVentas(this.idStore);

    this.ventaService.getVentas(this.idStore).subscribe(
      (data: Ventas[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getVentas(idStore:number): void{
    this.ventaService.getVentas(this.idStore).subscribe(
      (data:Ventas[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }


  openLink(idventa: Number){
     window.open("http://localhost:4200/dashboard/"+ this.idStore+"/ventas/"+idventa+"/comprobante")
  }

}
