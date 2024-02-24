import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaLivroComponent } from './edita-livro.component';

describe('EditaLivroComponent', () => {
  let component: EditaLivroComponent;
  let fixture: ComponentFixture<EditaLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
