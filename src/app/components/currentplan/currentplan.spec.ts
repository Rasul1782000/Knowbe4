import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Currentplan } from './currentplan';

describe('Currentplan', () => {
  let component: Currentplan;
  let fixture: ComponentFixture<Currentplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Currentplan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Currentplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
