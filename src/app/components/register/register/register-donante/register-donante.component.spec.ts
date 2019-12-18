import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDonanteComponent } from './register-donante.component';

describe('RegisterDonanteComponent', () => {
  let component: RegisterDonanteComponent;
  let fixture: ComponentFixture<RegisterDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
