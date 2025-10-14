import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetergroupComponent } from './metergroup';

describe('Metergroup', () => {
  let component: MetergroupComponent;
  let fixture: ComponentFixture<MetergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetergroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
