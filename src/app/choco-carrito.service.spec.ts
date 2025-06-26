import { TestBed } from '@angular/core/testing';

import { ChocoCarritoService } from './choco-carrito.service';

describe('ChocoCarritoService', () => {
  let service: ChocoCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocoCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
