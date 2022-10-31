import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BodeguerosService } from '../../services/stores/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  hide = true;
  myform!: FormGroup;
  Bodegueros!: Bodegueros[];
  correo!: string;
  contraseña!: string;
  esValido!: boolean;

  constructor(private formBuilder: FormBuilder,
    private BodeguerosService: BodeguerosService,
    private router: Router) { }

  ngOnInit(): void {
  this.loadMyForm();
    this.getBodegueros();
    this.esValido = true;}



  loadMyForm() {
    this.myform = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email, Validators.max(50)]],
      password: ['', [Validators.required, Validators.maxLength(50)]]
    })
  }
  getBodegueros() {
    this.BodeguerosService.getBodegueros().subscribe(
      (data: Bodegueros[]) => {
        this.Bodegueros = data;
      }
    )
  }

  verificarUsuario(): void {
    console.log(this.Bodegueros);
    this.correo = this.myform.get('email')?.value;
    this.contraseña = this.myform.get('password')?.value;

    for (let i = 0; i < this.Bodegueros.length; i++) {
      if (this.Bodegueros[i].correo == this.correo && this.Bodegueros[i].contraseña == this.contraseña) {
        this.router.navigate([`dashboard/${this.Bodegueros[i].id}`]);
      }
    }
    this.esValido = false;
  }


}


