import { Task } from './../../services/task.service';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  constructor(private taskService: TaskService) { }
  addTask(taskName: string,inputElement: HTMLInputElement): void {// Hàm này được gọi khi người dùng nhấn nút "Add Task"
    if(taskName.trim()){
    this.taskService.addTask(taskName);// Gọi phương thức addTask của TaskService để thêm công việc mới
    inputElement.value = '';// Xóa nội dung trong ô input sau khi thêm công việc
    }
  }
}
