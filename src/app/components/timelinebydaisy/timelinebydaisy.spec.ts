import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timelinebydaisy } from './timelinebydaisy';

describe('Timelinebydaisy', () => {
  let component: Timelinebydaisy;
  let fixture: ComponentFixture<Timelinebydaisy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Timelinebydaisy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Timelinebydaisy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
