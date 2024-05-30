import { Injectable } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedDate: Timestamp;
  private highlightedDates: any[] = [];

  setSelectedDate(date: Timestamp) {
    this.selectedDate = date;
  }

  getSelectedDate(): Timestamp {
    return this.selectedDate;
  }

  addHighlightedDate(date: Timestamp) {
    this.highlightedDates.push({ date, textColor: '#FDFEFE', backgroundColor: '#F39C12' });
  }

  getHighlightedDates() {
    return this.highlightedDates;
  }
}
