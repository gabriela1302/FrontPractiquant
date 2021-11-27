import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudperfilComponent } from './crudperfil.component';

describe('CrudperfilComponent', () => {
  let component: CrudperfilComponent;
  let fixture: ComponentFixture<CrudperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
