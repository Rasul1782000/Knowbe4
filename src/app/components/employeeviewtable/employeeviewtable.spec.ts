import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeviewtableComponent } from './employeeviewtable';

describe('EmployeeviewtableComponent', () => {
  let component: EmployeeviewtableComponent;
  let fixture: ComponentFixture<EmployeeviewtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeviewtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeviewtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
