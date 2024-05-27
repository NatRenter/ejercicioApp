import { Component } from '@angular/core';
import { IonItem ,IonAlert,IonIcon,IonFab,IonCol,IonRow,IonGrid,IonFooter,IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonCard, IonInput,IonButton, IonSpinner, IonCardHeader,IonCardTitle,IonCardSubtitle, IonDatetime,IonTextarea } from '@ionic/angular/standalone';
import { FirestoreService } from '../common/services/firestore.service';
import { UserI } from '../common/services/users.models';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [IonItem,IonAlert,IonIcon,IonFab,IonCol,IonRow,IonGrid,IonFooter,RouterLink,IonCardSubtitle,IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonCard, IonInput, FormsModule, IonButton, IonSpinner,IonCardHeader,IonCardTitle,IonDatetime,IonTextarea],
})
export class NotesPage {
  newUser : UserI ;
  tareas: UserI[] = [];
  cargando: boolean=false;


  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
    this.initUser();
  }


  loadusers() {
    this.firestoreService.getCollectionChanges<UserI>
    ('tareas').subscribe (cambios =>{
      if (cambios) {
        this.tareas = cambios
      }
    })
  }

  initUser(){
    this.newUser={
      titulo:null,
      detalles:null,
      fechaI:null,
      fechaF:null,
      id:this.firestoreService.createIdDoc(),
    }
  }
  async save(){
    this.cargando=true;
    await this.firestoreService.createDocumentID1(this.newUser)
      this.cargando=false;
  }

}