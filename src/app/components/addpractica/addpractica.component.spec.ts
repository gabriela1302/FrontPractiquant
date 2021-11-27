import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpracticaComponent } from './addpractica.component';

describe('AddpracticaComponent', () => {
  let component: AddpracticaComponent;
  let fixture: ComponentFixture<AddpracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
