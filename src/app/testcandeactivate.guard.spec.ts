import { TestBed } from '@angular/core/testing';

import { TestcandeactivateGuard } from './testcandeactivate.guard';

describe('TestcandeactivateGuard', () => {
  let guard: TestcandeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestcandeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
