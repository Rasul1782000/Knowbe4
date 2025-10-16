import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Submitbutton } from './submitbutton';

describe('Submitbutton', () => {
  let component: Submitbutton;
  let fixture: ComponentFixture<Submitbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Submitbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Submitbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
