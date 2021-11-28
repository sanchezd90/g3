import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPropiedadesComponent } from './registro-propiedades.component';

describe('RegistroPropiedadesComponent', () => {
  let component: RegistroPropiedadesComponent;
  let fixture: ComponentFixture<RegistroPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
