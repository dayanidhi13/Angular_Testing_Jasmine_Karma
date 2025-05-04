export class TodoComponent {
  tasks: string[] = [];

  addTask(task: string) {
    if (task) {
      this.tasks.push(task);
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
