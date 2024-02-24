import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaLivroComponent } from './pesquisa-livro.component';

describe('PesquisaLivroComponent', () => {
  let component: PesquisaLivroComponent;
  let fixture: ComponentFixture<PesquisaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
