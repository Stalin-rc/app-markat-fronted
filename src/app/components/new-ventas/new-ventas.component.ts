import { DetalleService } from './../../services/detalle.service';
import { Ventas } from './../../models/ventas';
import { DetalleVenta } from './../../models/detalleVenta';
import { VentasService } from './../../services/sales/ventas.service';
import { ClienteService } from 'src/app/services/clients/cliente.service';
import { Cliente } from './../../models/cliente';
import { ProductosService } from './../../services/products/productos.service';
import { Producto } from './../../models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'app-new-ventas',
  templateUrl: './new-ventas.component.html',
  styleUrls: ['./new-ventas.component.css']
})
export class NewVentasComponent implements OnInit {
  cantidad!: number;
  id!: number;
  myForm!: FormGroup;
  options: Producto[] = [];
  filteredOptions!: Observable<Producto[]>;
  myControl = new FormControl('');
  producto!: Producto;
  detalles: DetalleVenta[] = [];
  _venta!: Ventas;
  constructor(private formBuilder: FormBuilder,
    private activated: ActivatedRoute, private productoService: ProductosService,
    private clienteService: ClienteService, private ventaService: VentasService, private detalleService: DetalleService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params['id'];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''), map(value => this._filter(value || '')),
    );
    this.reactiveForm();
    this.getProductos();
  }
  getProductos() {
    this.productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.options = data;
      }
    )
  }
  conseguirProducto(data: any) {
    this.producto = data;
  }
  private _filter(value: string) {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.productName.toLowerCase().includes(filterValue));
  }
  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      dni: ["", [Validators.required]],
      boleta: ["", [Validators.required]],
      fecha: ["", [Validators.required]],
      credito: ["", [Validators.required]],
      cantidad: ['', [Validators.required]]
    })
  }
  addLista() {

    let detalle: DetalleVenta = {
      id: 99999,
      priceUnit: 1.2,
      noUnits: this.cantidad,
      subtotalPrice: 1.2 * this.cantidad,
      product: this.producto,
      sale: this._venta
    }

    this.detalles.push(detalle);
  }
  total() {
    let _sum = 0;
    for (let i = 0; i < this.detalles.length; i++) {
      _sum += this.detalles[i].subtotalPrice;
    }
    return _sum;
  }
  quitar(idx: number) {
    this.detalles.splice(idx, 1);
  }
  addVenta() {


    this.clienteService.getClientes(this.id).subscribe(
      (data: Cliente[]) => {
        let _cliente: any = data.find(x => x.dni == this.myForm.get('dni')?.value);
        if (_cliente) {
          let venta: Ventas = {
            id: 99999,
            totalPrice: this.total(),
            client: _cliente,
            dateSale: new Date(),
            sellType: '123',
            noVoucher: '123'
          }
          this.ventaService.addVenta(venta).subscribe({
            next: (data: Ventas) => {
              console.log('añadiendo venta: ', data);
              for (let i = 0; i < this.detalles.length; i++) {
                this.detalles[i].sale = data;
              }
              this.detalleService.addDetalle(this.detalles).subscribe({
                next: (data: DetalleVenta[]) => {
                  this.router.navigate(['dashboard/1/ventas']);
                },
                error: e => console.log('error detalle: ', e)
              })
            },
            error: e => console.log('error venta: ' + e)
          })
        } else {
          let cliente: Cliente = {
            id: 99999,
            firstName: this.myForm.get('first_name')?.value,
            lastName: this.myForm.get('last_name')?.value,
            dni: this.myForm.get('dni')?.value,
            credit: this.myForm.get('credit')?.value,
            morosidad: this.myForm.get('morosidad')?.value,
            payDate: this.myForm.get('pay_date')?.value,
            photo: this.myForm.get('photo')?.value
            
          }
          this.clienteService.addCliente(cliente).subscribe({
            next: (data: Cliente) => {
              let venta: Ventas = {
                id: 99999,
                totalPrice: this.total(),
                client: data,
                dateSale: new Date(),
                sellType: '123',
                noVoucher: '123'
              }
              this.ventaService.addVenta(venta).subscribe({
                next: (data: Ventas) => {
                  console.log('añadiendo venta: ', data);
                  for (let i = 0; i < this.detalles.length; i++) {
                    this.detalles[i].sale = data;
                  }
                  this.detalleService.addDetalle(this.detalles).subscribe({
                    next: (data: DetalleVenta[]) => {
                      this.router.navigate(['dashboard/1/ventas']);
                    },
                    error: e => console.log('error detalle: ', e)
                  })
                },
                error: e => console.log('error venta: ' + e)
              })
            }
          })
        }
      }
    )



  }

}
