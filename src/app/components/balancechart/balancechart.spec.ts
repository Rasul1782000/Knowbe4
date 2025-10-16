import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Balancechart } from './balancechart';

describe('Balancechart', () => {
  let component: Balancechart;
  let fixture: ComponentFixture<Balancechart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Balancechart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Balancechart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
