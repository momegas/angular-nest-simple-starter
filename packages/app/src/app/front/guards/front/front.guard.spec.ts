import { TestBed, async, inject } from '@angular/core/testing';

import { FrontGuard } from './front.guard';

describe('FrontGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontGuard]
    });
  });

  it('should ...', inject([FrontGuard], (guard: FrontGuard) => {
    expect(guard).toBeTruthy();
  }));
});
