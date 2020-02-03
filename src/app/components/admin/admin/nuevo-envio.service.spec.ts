import { TestBed } from '@angular/core/testing';

import { NuevoEnvioService } from './nuevo-envio.service';

describe('NuevoEnvioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuevoEnvioService = TestBed.get(NuevoEnvioService);
    expect(service).toBeTruthy();
  });
});
