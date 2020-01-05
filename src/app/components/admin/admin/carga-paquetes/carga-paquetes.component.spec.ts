import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPaquetesComponent } from './carga-paquetes.component';

describe('CargaPaquetesComponent', () => {
  let component: CargaPaquetesComponent;
  let fixture: ComponentFixture<CargaPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
