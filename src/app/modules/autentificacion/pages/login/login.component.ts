import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/autentificacion/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=''
  password=''
  async iniciarSesion() {
    try {
      await this.authService.iniciarSesion(this.email, this.password);
      console.log('Usuario ha iniciado sesión correctamente.');
      // Aquí podrías redirigir al usuario a otra página o realizar otra acción
    } catch (error) {
      // Manejo de errores: podrías mostrar un mensaje al usuario o realizar otra acción
      console.error('Error al iniciar sesión:', error);
    }
  }
}


