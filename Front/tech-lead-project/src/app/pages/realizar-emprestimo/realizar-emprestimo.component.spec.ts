import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarEmprestimoComponent } from './realizar-emprestimo.component';

describe('RealizarEmprestimoComponent', () => {
  let component: RealizarEmprestimoComponent;
  let fixture: ComponentFixture<RealizarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
