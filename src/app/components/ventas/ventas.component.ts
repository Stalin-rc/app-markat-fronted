import { BodeguerosService } from '../../services/stores/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { VentasService } from './../../services/sales/ventas.service';
import { Ventas } from './../../models/ventas';
import { Component, OnInit } from '@angular/core';
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
  id!: number;
  constructor(private ventaService: VentasService,
              private activetedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getVentas();
    this.id = this.activetedRoute.snapshot.params['id'];
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getVentas(): void{
    this.ventaService.getVentas().subscribe(
      (data:Ventas[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }



}
