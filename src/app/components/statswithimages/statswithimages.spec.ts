import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statswithimages } from './statswithimages';

describe('Statswithimages', () => {
  let component: Statswithimages;
  let fixture: ComponentFixture<Statswithimages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Statswithimages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statswithimages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
