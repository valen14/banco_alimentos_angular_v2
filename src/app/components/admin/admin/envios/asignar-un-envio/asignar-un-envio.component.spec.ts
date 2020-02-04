import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarUnEnvioComponent } from './asignar-un-envio.component';

describe('AsignarUnEnvioComponent', () => {
  let component: AsignarUnEnvioComponent;
  let fixture: ComponentFixture<AsignarUnEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarUnEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarUnEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
