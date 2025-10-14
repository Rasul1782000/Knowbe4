import { TestBed } from '@angular/core/testing';

import { Humanservice } from './humanservice';

describe('Humanservice', () => {
  let service: Humanservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Humanservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
