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

 //detalleVenta!:DetalleVenta;
 sale!:Ventas;
  
  constructor( private ventasService: VentasService, private DetalleService: DetalleService) { }

  ngOnInit(): void {
  
      this.ventasService.getVenta(33).subscribe(
        (data: Ventas) => {
          this.sale = data;
          console.log(data);
        }
      )
  }

}

