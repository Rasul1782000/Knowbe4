import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Revenuegraph } from './revenuegraph';

describe('Revenuegraph', () => {
  let component: Revenuegraph;
  let fixture: ComponentFixture<Revenuegraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Revenuegraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Revenuegraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
