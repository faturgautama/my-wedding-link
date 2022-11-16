import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampulComponent } from './sampul.component';

describe('SampulComponent', () => {
  let component: SampulComponent;
  let fixture: ComponentFixture<SampulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
