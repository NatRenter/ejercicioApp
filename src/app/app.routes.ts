import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'password',
    loadComponent: () => import('./password/password.page').then( m => m.PasswordPage)
  },
  {
    path: 'ejercicios',
    loadComponent: () => import('./ejercicios/ejercicios.page').then( m => m.EjerciciosPage)
  },
  {
    path: 'nueva-tarea',
    loadComponent: () => import('./nueva-tarea/nueva-tarea.page').then( m => m.NuevaTareaPage)
  },
  {
    path: 'lista-tarea',
    loadComponent: () => import('./lista-tarea/lista-tarea.page').then( m => m.ListaTareaPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes.page').then( m => m.NotesPage)
  },
];
