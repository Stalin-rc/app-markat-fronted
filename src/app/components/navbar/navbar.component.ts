import { BodeguerosService } from '../../services/stores/bodegueros.service';
import { Bodegueros } from './../../models/bodegueros';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  id!: number;
  Bodegueros!: Bodegueros;

  constructor(private activetedRoute: ActivatedRoute,
    private BodeguerosService: BodeguerosService) { }

  ngOnInit(): void {
    this.id = this.activetedRoute.snapshot.params['id'];
    // this.BodeguerosService.getBodeguero(this.id).subscribe(
    //   (data: Bodegueros) => {
    //     this.Bodegueros = data;
    //   }
    // )
  }


}
