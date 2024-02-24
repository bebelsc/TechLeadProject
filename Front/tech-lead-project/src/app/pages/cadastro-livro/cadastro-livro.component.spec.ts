import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLivroComponent } from './cadastro-livro.component';

describe('CadastroLivroComponent', () => {
  let component: CadastroLivroComponent;
  let fixture: ComponentFixture<CadastroLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
