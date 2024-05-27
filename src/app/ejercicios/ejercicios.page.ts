import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})

export class EjerciciosPage implements OnInit {
  email: string;

  constructor(private authService: AuthService, private alertController: AlertController) { 

  }

  ngOnInit() {
  }

  async resetPassword() {
    try {
      await this.authService.resetPassword(this.email).toPromise();
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico.',
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Hubo un problema al enviar el enlace de restablecimiento de contraseña. Por favor, verifica tu correo e intenta nuevamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

}
