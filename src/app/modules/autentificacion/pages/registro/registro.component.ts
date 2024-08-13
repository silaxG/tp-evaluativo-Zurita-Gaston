import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
// importamos servicio de autentificación
import { AuthService } from '../../services/auth.service';
// importamos servicio de firestore
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
// importamos componente de rutas de angular
import { Router } from '@angular/router';
// componente de encriptación
import * as CryptoJS from 'crypto-js';
// paquetería de alertas personalizadas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // input de la contraseña para ver los cáracteres o no
  hide = true;

  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    role: '',
    password: ''
  }

  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}

  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar(){
    // constante credenciales va a resguardar la información que ingrese el usuario
    /* REGISTRO LOCAL
    const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }*/

    // REGISTRO CON SERVICIO DE AUTH
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    // el método THEN es una promesa que devuelve el mismo valor si todo sale bien
    .then(res => {
      Swal.fire({
        title: "¡Buen trabajo!",
        text: "¡Se pudo registrar con éxito! :)",
        icon: "success"
      });

      // el método NAVIGATE nos redirecciona a otra vista
      this.servicioRutas.navigate(['/inicio']);
    })
    // el método CATCH captura una falla y la vuelve un error cuando la promesa salga mal
    .catch(error => {
      Swal.fire({
        title: "¡Oh no!",
        text: "Hubo un error al registrar un nuevo usuario :( \n"+error,
        icon: "error"
      });
    })

    // Constante UID captura el identificado de la BD

    const uid = await this.servicioAuth.obtenerUid() || ''; // Si `obtenerUid()` devuelve null, se asigna una cadena vacía.

    // Se le asigna al atributo de la interfaz esta constante
    this.usuarios.uid = uid;
    


    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    // Llamamos a la función guardUsuario()
    this.guardarUsuario();

    // Llamamos a la función limpiarInputs() para ejecutarla
    this.limpiarInputs();


  }

  async guardarUsuario(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(err => {
      console.log('Error => ', err);
    })
  }

  // Función para vaciar los inputs del formulario
  limpiarInputs(){
 
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.role = '',
      password: this.usuarios.password = ''
    }
  }
}
