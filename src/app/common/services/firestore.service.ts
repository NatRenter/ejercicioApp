import { Injectable,inject } from '@angular/core';
import {Firestore, collection, collectionData, setDoc , doc } from '@angular/fire/firestore';
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

}