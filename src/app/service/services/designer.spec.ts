import { TestBed } from '@angular/core/testing';

import { Designer } from './designer';

describe('Designer', () => {
  let service: Designer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Designer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
