import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advancedfiltertable } from './advancedfiltertable';

describe('Advancedfiltertable', () => {
  let component: Advancedfiltertable;
  let fixture: ComponentFixture<Advancedfiltertable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Advancedfiltertable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advancedfiltertable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
