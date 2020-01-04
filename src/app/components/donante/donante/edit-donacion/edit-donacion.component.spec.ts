import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDonacionComponent } from './edit-donacion.component';

describe('EditDonacionComponent', () => {
  let component: EditDonacionComponent;
  let fixture: ComponentFixture<EditDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
