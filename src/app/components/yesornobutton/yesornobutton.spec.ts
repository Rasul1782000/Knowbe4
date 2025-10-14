import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesornobuttonComponent } from './yesornobutton';

describe('Yesornobutton', () => {
  let component: YesornobuttonComponent;
  let fixture: ComponentFixture<YesornobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YesornobuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesornobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
