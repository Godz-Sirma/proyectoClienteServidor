import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeticionesComponent } from './competiciones.component';

describe('CompeticionesComponent', () => {
  let component: CompeticionesComponent;
  let fixture: ComponentFixture<CompeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
