import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { personCircle, personOutline, homeOutline, bookOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ personCircle, personOutline, homeOutline, bookOutline, calendarOutline })

   }

  ngOnInit() {
  }

}
