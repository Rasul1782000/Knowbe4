import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verifyotppage } from './verifyotppage';

describe('Verifyotppage', () => {
  let component: Verifyotppage;
  let fixture: ComponentFixture<Verifyotppage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Verifyotppage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verifyotppage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
