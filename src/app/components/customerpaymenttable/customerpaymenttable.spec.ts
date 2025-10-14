import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerpaymenttable } from './customerpaymenttable';

describe('Customerpaymenttable', () => {
  let component: Customerpaymenttable;
  let fixture: ComponentFixture<Customerpaymenttable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Customerpaymenttable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Customerpaymenttable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
