import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UserService } from 'src/app/modules/autentificacion/services/user.service';
import { FirestoreService } from 'src/app/modules/shared/firestore.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuarios: Usuario = {
    uid: '',
   email: '',
   role:'',
    password: '',
  }

  constructor(public servicioAuth: UserService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,
  ) { }
  //funcion que permite que permite verificar si las credenciales son correctas a la hora de iniciar sesion
 async iniciarSesion() {
    const credenciales={
      email: this.usuarios.email,
      passowrd: this.usuarios.password
    }
    const res= await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.passowrd)
    .then(res=>{
      alert("se pudo ingresar con exito")
      this.servicioRutas.navigate(["/inicio"])
    })
    .catch(err=>{
      alert("hubo un problema al iniciar sesion "+err)
    })
    //recibe la informacion ingresada desde el navegador

  }
}
