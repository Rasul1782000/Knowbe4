import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer2forservices } from './footer2forservices';

describe('Footer2forservices', () => {
  let component: Footer2forservices;
  let fixture: ComponentFixture<Footer2forservices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Footer2forservices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Footer2forservices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
