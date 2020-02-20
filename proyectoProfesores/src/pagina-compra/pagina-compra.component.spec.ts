import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCompraComponent } from './pagina-compra.component';

describe('PaginaCompraComponent', () => {
  let component: PaginaCompraComponent;
  let fixture: ComponentFixture<PaginaCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
