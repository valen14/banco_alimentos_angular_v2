import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinAsignarComponent } from './sin-asignar.component';

describe('SinAsignarComponent', () => {
  let component: SinAsignarComponent;
  let fixture: ComponentFixture<SinAsignarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinAsignarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinAsignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
