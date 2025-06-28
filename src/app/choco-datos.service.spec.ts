import { TestBed } from '@angular/core/testing';

import { ChocoDatosService } from './choco-datos.service';

describe('ChocoDatosService', () => {
  let service: ChocoDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocoDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
