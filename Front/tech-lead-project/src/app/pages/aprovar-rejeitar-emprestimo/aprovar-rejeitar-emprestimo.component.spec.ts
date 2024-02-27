import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovarRejeitarEmprestimoComponent } from './aprovar-rejeitar-emprestimo.component';

describe('AprovarRejeitarEmprestimoComponent', () => {
  let component: AprovarRejeitarEmprestimoComponent;
  let fixture: ComponentFixture<AprovarRejeitarEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovarRejeitarEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovarRejeitarEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
