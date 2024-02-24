import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaLivroComponent } from './deleta-livro.component';

describe('DeletaLivroComponent', () => {
  let component: DeletaLivroComponent;
  let fixture: ComponentFixture<DeletaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletaLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
