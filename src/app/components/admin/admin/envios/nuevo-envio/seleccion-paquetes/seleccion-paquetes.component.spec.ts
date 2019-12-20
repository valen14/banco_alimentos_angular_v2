import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPaquetesComponent } from './seleccion-paquetes.component';

describe('SeleccionPaquetesComponent', () => {
  let component: SeleccionPaquetesComponent;
  let fixture: ComponentFixture<SeleccionPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
