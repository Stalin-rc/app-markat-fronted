import { TestBed } from '@angular/core/testing';

import { BodeguerosService } from '../stores/bodegueros.service';

describe('BodeguerosService', () => {
  let service: BodeguerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodeguerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
