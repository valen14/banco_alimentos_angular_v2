import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionBeneficiarioComponent } from './seleccion-beneficiario.component';

describe('SeleccionBeneficiarioComponent', () => {
  let component: SeleccionBeneficiarioComponent;
  let fixture: ComponentFixture<SeleccionBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
