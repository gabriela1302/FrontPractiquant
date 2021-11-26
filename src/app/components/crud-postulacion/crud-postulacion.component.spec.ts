import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPostulacionComponent } from './crud-postulacion.component';

describe('CrudPostulacionComponent', () => {
  let component: CrudPostulacionComponent;
  let fixture: ComponentFixture<CrudPostulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPostulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPostulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
