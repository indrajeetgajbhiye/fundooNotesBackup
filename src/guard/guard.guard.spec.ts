import { TestBed, async, inject } from '@angular/core/testing';

import { GuardGuard } from './guard.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('GuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [GuardGuard]
    });
  });

  it('should ...', inject([GuardGuard], (guard: GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
