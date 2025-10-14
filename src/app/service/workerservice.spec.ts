import { TestBed } from '@angular/core/testing';

import { Workerservice } from './workerservice';

describe('Workerservice', () => {
  let service: Workerservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Workerservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
