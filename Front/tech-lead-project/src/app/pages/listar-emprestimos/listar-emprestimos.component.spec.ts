import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEmprestimosComponent } from './listar-emprestimos.component';

describe('ListarEmprestimosComponent', () => {
  let component: ListarEmprestimosComponent;
  let fixture: ComponentFixture<ListarEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEmprestimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
