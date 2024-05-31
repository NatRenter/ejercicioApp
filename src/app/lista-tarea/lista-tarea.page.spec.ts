import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaTareaPage } from './lista-tarea.page';

describe('ListaTareaPage', () => {
  let component: ListaTareaPage;
  let fixture: ComponentFixture<ListaTareaPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(ListaTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
