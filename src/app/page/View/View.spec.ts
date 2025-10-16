import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewpage} from './View';

describe('Bookmark', () => {
  let component: Viewpage;
  let fixture: ComponentFixture<Viewpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Viewpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
