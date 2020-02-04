import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BultosComponent } from './bultos.component';

describe('BultosComponent', () => {
  let component: BultosComponent;
  let fixture: ComponentFixture<BultosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BultosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
