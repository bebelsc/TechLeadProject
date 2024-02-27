import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverEmprestimoComponent } from './devolver-emprestimo.component';

describe('DevolverEmprestimoComponent', () => {
  let component: DevolverEmprestimoComponent;
  let fixture: ComponentFixture<DevolverEmprestimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolverEmprestimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolverEmprestimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
