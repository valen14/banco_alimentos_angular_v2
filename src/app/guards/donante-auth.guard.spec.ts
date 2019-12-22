import { TestBed, async, inject } from '@angular/core/testing';

import { DonanteAuthGuard } from './donante-auth.guard';

describe('DonanteAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonanteAuthGuard]
    });
  });

  it('should ...', inject([DonanteAuthGuard], (guard: DonanteAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
