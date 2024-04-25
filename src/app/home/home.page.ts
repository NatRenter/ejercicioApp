import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonInput } from '@ionic/angular/standalone';
import { UserI } from '../common/services/users.models';
import { FirestoreService } from '../common/services/firestore.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonCard, IonInput, RouterLink]
})
export class HomePage {
  users: UserI[] = [];
  directorio: diretI[] = [];

  constructor(private firestoreService: FirestoreService) {
    this.loadusers();
  }
  loadusers() {
    this.firestoreService.getCollectionChanges<UserI>
    ('Users').subscribe (cambios =>{
      if(cambios){
        this.users=cambios
      }
    })
    

    /*const user1 = {
      name: 'Erick',
      email: 'dir@tecnm.piedad.mx',
      ControlNumber: '21640005',
      department: 'TIC´S'
    }
    const user2 = {
      name: 'Pedro',
      email: 'pedro@tecnm.piedad.mx',
      ControlNumber: '21640004',
      department: 'TIC´S'
    }
    const user3 = {
      name: 'Josue',
      email: 'josue@tecnm.piedad.mx',
      ControlNumber: '21640010',
      department: 'TIC´S'
    }

    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);*/
  }
  initUser(){
    this.newUser={
      name:null,
      email:null,
      noControl:null,
      id:this.firestoreService.createIdDoc(),
      
    }
  }
  async save(){
    this.cargando=true;
    await this.firestoreService.createDocumentID(this.newUser,
      'Usuarios', this.newUser.id)
      this.cargando=false;
  }
}