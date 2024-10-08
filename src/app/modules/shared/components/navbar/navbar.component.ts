import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false; // Cambiar a una sola variable

  constructor(
    private servicioAuth: AuthService,
    private servicioRutas: Router,
    private afAuth: AngularFireAuth // Inyectar AngularFireAuth
  ) {}

  ngOnInit() {
    // Observa el estado de autenticación
    this.afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user; // Establece isLoggedIn en true si hay un usuario
    });
  }

  // Método para iniciar sesión que acepta email y password
  async ingresar(email: string, password: string) {
    try {
      await this.servicioAuth.iniciarSesion(email, password);
      // El estado se actualizará automáticamente gracias a authState
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
    }
  }

  // Método para cerrar sesión
  async cerrarSesion() {
    await this.servicioAuth.cerrarSesion();
    this.servicioRutas.navigate(['/']);
  }
}