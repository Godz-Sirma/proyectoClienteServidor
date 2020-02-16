import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesClaseComponent } from './detalles-clase.component';

describe('DetallesClaseComponent', () => {
  let component: DetallesClaseComponent;
  let fixture: ComponentFixture<DetallesClaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesClaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
