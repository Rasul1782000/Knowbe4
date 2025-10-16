import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Treechart } from './treechart';

describe('Treechart', () => {
  let component: Treechart;
  let fixture: ComponentFixture<Treechart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Treechart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Treechart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
