import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlipSwitchComponent } from './flip-switch';



describe('FlipSwitch', () => {
  let component: FlipSwitchComponent;
  let fixture: ComponentFixture<FlipSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlipSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
