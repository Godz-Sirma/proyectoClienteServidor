import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesProfeComponent } from './clases-profe.component';

describe('ClasesProfeComponent', () => {
  let component: ClasesProfeComponent;
  let fixture: ComponentFixture<ClasesProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
