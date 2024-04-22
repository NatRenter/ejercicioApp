import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.page.html',
  styleUrls: ['./lista-tarea.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaTareaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
