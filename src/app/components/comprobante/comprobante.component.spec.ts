import { VentasService } from './../../services/sales/ventas.service';
import { Ventas } from './../../models/ventas';
import { DetalleService } from './../../services/detalle.service';
import { DetalleVenta } from './../../models/detalleVenta';
import { Stores } from './../../models/stores';
import { Component, OnInit } from '@angular/core';

describe('ComprobanteComponent', () => {
  let component: ComprobanteComponent;
  let fixture: ComponentFixture<ComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprobanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
