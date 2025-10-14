import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statusfilter } from './statusfilter';

describe('Statusfilter', () => {
  let component: Statusfilter;
  let fixture: ComponentFixture<Statusfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Statusfilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statusfilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
