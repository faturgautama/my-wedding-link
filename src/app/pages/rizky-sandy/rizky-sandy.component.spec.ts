import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RizkySandyComponent } from './rizky-sandy.component';

describe('RizkySandyComponent', () => {
  let component: RizkySandyComponent;
  let fixture: ComponentFixture<RizkySandyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RizkySandyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RizkySandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
