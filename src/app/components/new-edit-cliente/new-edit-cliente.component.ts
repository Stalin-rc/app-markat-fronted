import { StoresService } from '../../services/stores/stores.service';
import { Stores } from '../../models/stores';
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
  Stores!: Stores;


  constructor(private activated: ActivatedRoute, private formBuilder: FormBuilder, private clienteService: ClienteService,
    private router: Router, private StoresService: StoresService,
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

      first_name: ['', [Validators.required]],
      last_name: ['', Validators.required],
      dni: ['', [Validators.required]],
      client_address: ['', [Validators.required]],
      no_phone:['', [Validators.required]],
      credit: ['', [Validators.required]],
      photo:['', [Validators.required]],
      pay_date: ['', [Validators.required]],
      morosidad: ['', [Validators.required]]
    })
  }


  addCliente() {
    let cliente: Cliente = {
      id: 999999,
      firstName: this.myForm.get('first_name')?.value,
      lastName: this.myForm.get('last_name')?.value,
      dni: this.myForm.get('dni')?.value,
      credit: this.myForm.get('credit')?.value,
      morosidad: this.myForm.get('morosidad')?.value,
      payDate: this.myForm.get('pay_date')?.value,
      photo: this.myForm.get('photo')?.value
      /*
      clientAddress: this.myForm.get('client_address')?.value,
      noPhone: this.myForm.get('no_phone')?.value,
      credit: this.myForm.get('credit')?.value
      photo: this.myForm.get('photo')?.value,
      payDate: this.myForm.get('pay_date')?.value,
      morosidad: this.myForm.get('morosidad')?.value
*/

    }

    this.clienteService.addCliente(cliente).subscribe({
      next: (data: Cliente) => {
        this.router.navigate(['dashboard/1']);
      },
      error: e => console.log(e)
    })
  }

}
