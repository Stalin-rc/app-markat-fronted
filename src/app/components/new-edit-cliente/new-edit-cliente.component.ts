import { BodeguerosService } from '../../services/stores/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clients/cliente.service';

@Component({
  selector: 'app-new-edit-cliente',
  templateUrl: './new-edit-cliente.component.html',
  styleUrls: ['./new-edit-cliente.component.css']
})
export class NewEditClienteComponent implements OnInit {

  id_cliente!: number;
  myForm!: FormGroup;
  url!: string;
  id!: number;
  Bodegueros!: Bodegueros;


  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private clienteService: ClienteService,
    private router: Router, private BodeguerosService: BodeguerosService,
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cliente = this.activated.snapshot.params['id_cliente'];
    this.reactiveForm();
    console.log(this.id);



    this.id = this.activetedRoute.snapshot.params['id'];
    // this.BodeguerosService.getBodeguero(this.id).subscribe(
    //   (data: Bodegueros) => {
    //     this.Bodegueros = data;
    //   }
    // )

  }

  reactiveForm() {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      lastName: ['', Validators.required]
    })
  }


  addCliente() {
    let cliente: Cliente = {
      id: 999999,
      firstName: this.myForm.get('nombre')?.value,
      lastName: this.myForm.get('lastName')?.value,
      dni: this.myForm.get('dni')?.value
    }

    this.clienteService.addCliente(cliente).subscribe({
      next: (data: Cliente) => {
        this.router.navigate(['dashboard/1']);
      },
      error: e => console.log(e)
    })
  }

}
