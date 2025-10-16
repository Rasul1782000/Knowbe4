import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivesubmitform } from './reactivesubmitform';

describe('Reactivesubmitform', () => {
  let component: Reactivesubmitform;
  let fixture: ComponentFixture<Reactivesubmitform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reactivesubmitform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivesubmitform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
