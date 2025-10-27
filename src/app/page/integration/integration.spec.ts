import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationPage } from './integration';

describe('Integration', () => {
  let component: IntegrationPage;
  let fixture: ComponentFixture<IntegrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntegrationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
