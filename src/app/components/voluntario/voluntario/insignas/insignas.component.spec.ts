import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsignasComponent } from './insignas.component';

describe('InsignasComponent', () => {
  let component: InsignasComponent;
  let fixture: ComponentFixture<InsignasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsignasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsignasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
