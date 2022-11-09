import { StoresService } from './../../services/stores/stores.service';
import { Stores } from '../../models/stores';
import { Producto } from './../../models/producto';
import { ProductosService } from './../../services/products/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-edit-product',
  templateUrl: './new-edit-product.component.html',
  styleUrls: ['./new-edit-product.component.css']
})
export class NewEditProductComponent implements OnInit {
  id_producto!: number;
  myForm!: FormGroup;
  url!: string;
  /*Bodeguero*/
  id!: number;
  Bodegueros!: Stores;

  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private productoService: ProductosService,
    private router: Router, private StoresService: StoresService,
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_producto = this.activated.snapshot.params['id_producto'];
    this.reactiveForm();
    this.cargarFormulario();
    console.log(this.id_producto);
    /*Bodeguero*/

    this.id = this.activetedRoute.snapshot.params['id'];
    this.StoresService.getStore(this.id).subscribe(
      (data: Stores) => {
        this.Bodegueros = data;
      }
    )
  }

  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', Validators.required],
      unidades: ['', Validators.required],
      url: ['', Validators.required]
    })
  }

  cargarFormulario() {
    if (this.id_producto != undefined) {
      /*
      this.productoService.getProducto(this.id_producto).subscribe(
        (data: Producto) => {
          this.myForm.get('nombre')?.setValue(data.nombre);
          this.myForm.get('marca')?.setValue(data.marca);
          this.myForm.get('descripcion')?.setValue(data.descripcion);
          this.myForm.get('precio')?.setValue(data.precio);
          this.myForm.get('unidades')?.setValue(data.stock);
          this.myForm.get('url')?.setValue(data.img);
          this.url = data.img;
        }
      )*/
    } else {
      this.url = "../../../assets/logo.png";
      this.id_producto = 0;
    }
  }

  addProducto() {
    const producto: Producto = {
      id: this.id_producto,
      productName: this.myForm.get('nombre')?.value,
      brand: this.myForm.get('marca')?.value,
      productDescription: this.myForm.get('descripcion')?.value,
      img: this.myForm.get('url')?.value,
      precio: this.myForm.get('precio')?.value,
      type_name: ''
    }

    /*

    if (this.id_producto == 0) {

      this.productoService.addProducto(producto).subscribe({
        next: (data: Producto) => {
          this.router.navigate([`dashboard/${this.Bodegueros.id}/inventario`]);
        },
        error: (e) => {
          console.log(e);
        }
      })
    } else {
      this.productoService.editProducto(producto).subscribe({ 
        next: (data: Producto) => {
          this.router.navigate([`dashboard/${this.Bodegueros.id}/inventario`]);
        },
        error: (e) => {
          console.log(e); 
        }
      })
    }*/
  }
}
