import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesProfeComponent } from './detalles-profe.component';

describe('DetallesProfeComponent', () => {
  let component: DetallesProfeComponent;
  let fixture: ComponentFixture<DetallesProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
