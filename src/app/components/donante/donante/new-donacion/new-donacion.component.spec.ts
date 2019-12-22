import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonacionComponent } from './new-donacion.component';

describe('NewDonacionComponent', () => {
  let component: NewDonacionComponent;
  let fixture: ComponentFixture<NewDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
