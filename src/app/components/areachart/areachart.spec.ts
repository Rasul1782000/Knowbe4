import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Areachart } from './areachart';

describe('Areachart', () => {
  let component: Areachart;
  let fixture: ComponentFixture<Areachart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Areachart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Areachart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
