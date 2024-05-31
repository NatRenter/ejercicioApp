import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild  } from '@angular/core';
import { IonSegment,IonSegmentButton,IonIcon,IonFab,IonCol,IonRow,IonGrid,IonFooter,IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, IonCard, IonInput,IonButton, IonSpinner, IonCardHeader,IonCardTitle,IonCardSubtitle } from '@ionic/angular/standalone';
import { FirestoreService } from '../common/services/firestore.service';
import { UserI } from '../common/services/users.models';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-tarea',
  templateUrl: './lista-tarea.page.html',
  styleUrls: ['./lista-tarea.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonFab,
    IonCol,
    IonRow,
    IonGrid,
    IonFooter,
    RouterLink,
    IonCardSubtitle,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonLabel, 
    IonItem, 
    IonList, 
    IonCard, 
    IonInput, 
    FormsModule, IonButton, IonSpinner,IonCardHeader,IonCardTitle],
})
export class ListaTareaPage{

  @ViewChild(IonContent, { static: false }) content: IonContent;

  newUser : UserI ;
  tareas: UserI[] = [];
  cargando: boolean=false;
  userEmail: string | null = null;
  
  constructor(private firestoreService: FirestoreService,private authService: AuthService) {
    this.loadusers();
   
  }

  scrollToBottom() {
    this.content.scrollToBottom(300);  // Adjust the duration as needed
  }

  scrollToTop() {
    this.content.scrollToTop(300);  // Adjust the duration as needed
  }

  loadusers() {
    this.firestoreService.getCollectionChanges<UserI>
    ('tareas').subscribe (cambios =>{
      if (cambios) {
        this.tareas = cambios
      }
    })
  }

  
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.authService.getUser().subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  trackByFn(index: number, item: UserI): string {
    return item.id; // Cambia 'id' por la propiedad única de tus objetos
  }
}