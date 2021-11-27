import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpracticaComponent } from './crudpractica.component';

describe('CrudpracticaComponent', () => {
  let component: CrudpracticaComponent;
  let fixture: ComponentFixture<CrudpracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudpracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
