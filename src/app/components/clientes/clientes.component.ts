import { StoresService } from '../../services/stores/stores.service';
import { Stores } from '../../models/stores';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/clients/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  displayedColumns: string[] = ['photo','firstName','lastName','dni','credit','morosidad','pay_date'];
  dataSource = new MatTableDataSource<Cliente>();
  id!:number;

  constructor(private clienteService: ClienteService, private ActivatedRoute: ActivatedRoute, 
    private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id = this.activetedRoute.snapshot.params['id'];
    this.getClientes(this.id);

  
     this.id = this.activetedRoute.snapshot.params['id'];

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getClientes(id:number) {
    this.clienteService.getClientes(id).subscribe(
      (data: Cliente[]) => {
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

}
