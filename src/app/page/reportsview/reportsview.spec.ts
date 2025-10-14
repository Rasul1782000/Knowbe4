import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportsview } from './reportsview';

describe('Reportsview', () => {
  let component: Reportsview;
  let fixture: ComponentFixture<Reportsview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reportsview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportsview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
