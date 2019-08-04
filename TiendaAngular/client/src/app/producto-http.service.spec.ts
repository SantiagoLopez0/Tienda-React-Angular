import { TestBed } from '@angular/core/testing';

import { ProductoHttpService } from './producto-http.service';

describe('ProductoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoHttpService = TestBed.get(ProductoHttpService);
    expect(service).toBeTruthy();
  });
});
