import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecarioComponent } from './bibliotecario.component';

describe('BibliotecarioComponent', () => {
  let component: BibliotecarioComponent;
  let fixture: ComponentFixture<BibliotecarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
