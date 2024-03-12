import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MainPage implements OnInit {

  highlightedDates=[
    {
      date: '2024-01-22',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },

  ];

  constructor() {

   }

  ngOnInit() {
  }

}
