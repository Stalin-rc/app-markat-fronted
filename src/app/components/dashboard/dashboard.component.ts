import { ClienteService } from 'src/app/services/clients/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  credits:number=0;
  

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

this.clienteService.GetTotalCredits().subscribe(
  (data:any)=>{
    this.credits=data; 
  }
)

  }

}
