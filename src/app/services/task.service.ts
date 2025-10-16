import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs'; //beahaviorSubject là một loại Observable đặc biệt trong RxJS, nó lưu trữ giá trị hiện tại và phát giá trị đó cho bất kỳ người đăng ký mới nào ngay khi họ đăng ký.
// Khi giá trị bên trong BehaviorSubject thay đổi, nó sẽ phát giá trị mới cho tất cả các người đăng ký hiện tại.
// Observable là một phần của thư viện RxJS, nó đại diện cho một luồng dữ liệu có thể phát ra nhiều giá trị theo thời gian. Observable cho phép bạn đăng ký để nhận các giá trị này khi chúng được phát ra.
// Observable thường được sử dụng để xử lý các luồng dữ liệu bất đồng bộ, như sự kiện người dùng, phản hồi từ máy chủ, hoặc các luồng dữ liệu thời gian thực khác

export interface Task {
id: number;
name: string;
isCompleted: boolean;
}
@Injectable({
  providedIn: 'root' // khai báo sẻr dụng trong toàn bộ ứng dụng
})
export class TaskService {

  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([

    { id: 1, name: 'Task 1', isCompleted: false },  
    { id: 2, name: 'Task 2', isCompleted: true },
    { id: 3, name: 'Task 3', isCompleted: false }
  ]);// BehaviorSubject để quản lý trạng thái của danh sách công việ
  public tasks$: Observable<Task[]> = this.tasksSubject.asObservable();// Observable để các thành phần khác có thể đăng ký và nhận cập nhật về danh sách công việc
private nextId = 4; // Biến để theo dõi ID tiếp theo cho công việc mới
addTask(name :string): void{
  const newTask: Task={
    id: this.nextId++,
    name,
    isCompleted: false
  };
  const currentTasks = this.tasksSubject.getValue();// Lấy giá trị hiện tại của danh sách công việc
  this.tasksSubject.next([...currentTasks,newTask]);// Cập nhật danh sách công việc với công việc mới
  console.log('Task added:', newTask);
}
  constructor() { }
}
