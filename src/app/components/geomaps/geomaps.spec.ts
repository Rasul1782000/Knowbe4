import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geomaps } from './geomaps';

describe('Geomaps', () => {
  let component: Geomaps;
  let fixture: ComponentFixture<Geomaps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Geomaps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Geomaps);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
