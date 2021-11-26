import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPracticaComponent } from './crud-practica.component';

describe('CrudPracticaComponent', () => {
  let component: CrudPracticaComponent;
  let fixture: ComponentFixture<CrudPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPracticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
