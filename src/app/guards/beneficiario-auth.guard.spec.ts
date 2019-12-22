import { TestBed, async, inject } from '@angular/core/testing';

import { BeneficiarioAuthGuard } from './beneficiario-auth.guard';

describe('BeneficiarioAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficiarioAuthGuard]
    });
  });

  it('should ...', inject([BeneficiarioAuthGuard], (guard: BeneficiarioAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
