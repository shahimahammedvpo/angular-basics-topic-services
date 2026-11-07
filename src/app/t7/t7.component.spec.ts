import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T7Component } from './t7.component';

describe('T7Component', () => {
  let component: T7Component;
  let fixture: ComponentFixture<T7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [T7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
