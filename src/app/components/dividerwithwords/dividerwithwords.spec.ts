import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dividerwithwords } from './dividerwithwords';

describe('Dividerwithwords', () => {
  let component: Dividerwithwords;
  let fixture: ComponentFixture<Dividerwithwords>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dividerwithwords]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dividerwithwords);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
