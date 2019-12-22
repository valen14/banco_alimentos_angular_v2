import { TestBed, async, inject } from '@angular/core/testing';

import { VoluntarioAuthGuard } from './voluntario-auth.guard';

describe('VoluntarioAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoluntarioAuthGuard]
    });
  });

  it('should ...', inject([VoluntarioAuthGuard], (guard: VoluntarioAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
