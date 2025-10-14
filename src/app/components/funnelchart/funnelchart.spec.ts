import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunnelchartComponent } from './funnelchart';

describe('Funnelchart', () => {
  let component: FunnelchartComponent;
  let fixture: ComponentFixture<FunnelchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunnelchartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunnelchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
