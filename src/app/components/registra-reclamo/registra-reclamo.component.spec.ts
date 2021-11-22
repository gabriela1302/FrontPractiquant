import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraReclamoComponent } from './registra-reclamo.component';

describe('RegistraReclamoComponent', () => {
  let component: RegistraReclamoComponent;
  let fixture: ComponentFixture<RegistraReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraReclamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistraReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
