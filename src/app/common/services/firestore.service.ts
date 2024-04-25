import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
const {v4: uuidv4} = require('uuid');

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore: Firestore = inject(Firestore);
  constructor() { }

  getCollectionChanges<tipo>(path: string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }

  createDocumentID(data: any, enlace:string, idDoc:string){
  const document = doc(this.firestore, '$(enlace)/$(idDoc)');
  return setDoc(document,data);
  }
}