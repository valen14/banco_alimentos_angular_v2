import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionVoluntarioComponent } from './seleccion-voluntario.component';

describe('SeleccionVoluntarioComponent', () => {
  let component: SeleccionVoluntarioComponent;
  let fixture: ComponentFixture<SeleccionVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
