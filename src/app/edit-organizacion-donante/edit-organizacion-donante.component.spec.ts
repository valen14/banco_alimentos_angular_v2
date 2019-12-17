import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganizacionDonanteComponent } from './edit-organizacion-donante.component';

describe('EditOrganizacionDonanteComponent', () => {
  let component: EditOrganizacionDonanteComponent;
  let fixture: ComponentFixture<EditOrganizacionDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrganizacionDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrganizacionDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
