import { VentasService } from './../../services/sales/ventas.service';
import { Ventas } from './../../models/ventas';
import { DetalleService } from './../../services/detalle.service';
import { DetalleVenta } from './../../models/detalleVenta';
import { Stores } from './../../models/stores';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  
  constructor( private ventasService: VentasService, private detalleService: DetalleService) { }

  ngOnInit(): void {
  }

}
