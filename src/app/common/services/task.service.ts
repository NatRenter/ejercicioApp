import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserI } from '../services/users.models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tareasSubject = new BehaviorSubject<UserI[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  setTareas(tareas: UserI[]) {
    this.tareasSubject.next(tareas);
  }
}