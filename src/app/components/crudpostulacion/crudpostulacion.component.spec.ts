import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpostulacionComponent } from './crudpostulacion.component';

describe('CrudpostulacionComponent', () => {
  let component: CrudpostulacionComponent;
  let fixture: ComponentFixture<CrudpostulacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudpostulacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
