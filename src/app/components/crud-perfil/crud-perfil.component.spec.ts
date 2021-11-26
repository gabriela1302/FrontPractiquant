import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPerfilComponent } from './crud-perfil.component';

describe('CrudPerfilComponent', () => {
  let component: CrudPerfilComponent;
  let fixture: ComponentFixture<CrudPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
