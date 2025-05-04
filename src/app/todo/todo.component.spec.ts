import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;

  beforeEach(() => {
    component = new TodoComponent();
  });

  it('should add a task', () => {
    component.addTask('Learn Testing');
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Learn Testing');
  });

  it('should remove a task', () => {
    component.addTask('Task 1');
    component.addTask('Task 2');
    component.removeTask(0);
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0]).toBe('Task 2');
  });

  it('should not add empty task', () => {
    component.addTask('');
    expect(component.tasks.length).toBe(0);
  });
});
