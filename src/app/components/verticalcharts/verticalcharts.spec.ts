import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerticalchartsComponent } from './verticalcharts';

describe('VerticalchartsComponents', () => {
  let component: VerticalchartsComponent;
  let fixture: ComponentFixture<VerticalchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalchartsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VerticalchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
