import { TestBed } from '@angular/core/testing';

import { QuadrasGuard } from './quadras.guard';

describe('QuadrasGuard', () => {
  let guard: QuadrasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuadrasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
