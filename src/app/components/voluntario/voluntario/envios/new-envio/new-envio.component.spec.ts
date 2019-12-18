import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnvioComponent } from './new-envio.component';

describe('NewEnvioComponent', () => {
  let component: NewEnvioComponent;
  let fixture: ComponentFixture<NewEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
