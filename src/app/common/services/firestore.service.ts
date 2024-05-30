import { Injectable,inject } from '@angular/core';
import {Firestore, collection, collectionData, setDoc , doc, where, query, getDocs } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
const {v4: uuidv4} = require ("uuid");


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore =inject(Firestore);

  constructor() { }

  getCollectionChanges<tipo>(path: string){
    const refcolecction = collection(this.firestore,path);
    return collectionData(refcolecction) as Observable<tipo[]>;
  }


  createDocumentID1(data: any){
    const document = doc(this.firestore,'tareas', this.createIdDoc());
    return setDoc(document, data)
      }

  createIdDoc(){
    return uuidv4();
  }

  // Obtiene los eventos por fecha.
  async getEventsByDate(date: string) {
    try {
      const startDate = new Date(date);
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + 1);
  
      const eventsRef = collection(this.firestore, 'tareas');
      const q = query(eventsRef, where('fechaI', '>=', startDate.toISOString()), where('fechaI', '<', endDate.toISOString())); 
      const querySnapshot = await getDocs(q);
      return querySnapshot; 
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error; // Rethrow the error after logging it
    }
}
}
  
