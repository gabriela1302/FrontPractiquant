import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpostulacionComponent } from './addpostulacion.component';

describe('AddpostulacionComponent', () => {
  let component: AddpostulacionComponent;
  let fixture: ComponentFixture<AddpostulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpostulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
