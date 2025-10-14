import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportssearch } from './reportssearch';

describe('Reportssearch', () => {
  let component: Reportssearch;
  let fixture: ComponentFixture<Reportssearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reportssearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportssearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
