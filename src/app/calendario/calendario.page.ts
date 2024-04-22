import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CalendarioPage implements OnInit {

  highlightedDates = [
    {
      date: '2024-01-22',
      textColor: '#FDFEFE',
      backgroundColor: '#2ECC71',
    },
    {
      date: '2024-01-23',
      textColor: '#FDFEFE',
      backgroundColor: '#2ECC71',
    },
    {
      date: '2024-01-24',
      textColor: '#FDFEFE',
      backgroundColor: '#2ECC71',
    },
    {
      date: '2024-01-29',
      textColor: '#FDFEFE',
      backgroundColor: '#1E8449',
    },
    {
      date: '2024-02-01',
      textColor: '#E74C3C',
    },
    {
      date: '2024-02-02',
      textColor: '#E74C3C',
    },
    {
      date: '2024-02-05',
      textColor: '#FDFEFE',
      backgroundColor: '#979A9A',
    },
    {
      date: '2024-02-05',
      textColor: '#FDFEFE',
      backgroundColor: '#979A9A',
    },
    {
      date: '2024-02-09',
      textColor: '#FDFEFE',
      backgroundColor: '#E74C3C',
    },
    {
      date: '2024-03-18',
      textColor: '#FDFEFE',
      backgroundColor: '#979A9A',
    },
    {
      date: '2024-03-25',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-03-26',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-03-27',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-03-28',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-03-29',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-01',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-02',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-03',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-04',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-05',
      textColor: '#FDFEFE',
      backgroundColor: '#566573',
    },
    {
      date: '2024-04-19',
      textColor: '#FDFEFE',
      backgroundColor: '#F1C40F',
    },
    {
      date: '2024-05-01',
      textColor: '#FDFEFE',
      backgroundColor: '#979A9A',
    },
    {
      date: '2024-05-15',
      textColor: '#FDFEFE',
      backgroundColor: '#979A9A',
    },
    {
      date: '2024-05-31',
      textColor: '#FDFEFE',
      backgroundColor: '#E74C3C',
    },
    {
      date: '2024-06-24',
      textColor: '#FDFEFE',
      backgroundColor: '#F39C12',
    },
    {
      date: '2024-06-25',
      textColor: '#FDFEFE',
      backgroundColor: '#F39C12',
    },
    {
      date: '2024-06-26',
      textColor: '#FDFEFE',
      backgroundColor: '#F39C12',
    },
    {
      date: '2024-06-27',
      textColor: '#FDFEFE',
      backgroundColor: '#F39C12',
    },
    {
      date: '2024-06-28',
      textColor: '#FDFEFE',
      backgroundColor: '#F39C12',
    },


  ];

  constructor() {

   }

  ngOnInit() {
  }

}
