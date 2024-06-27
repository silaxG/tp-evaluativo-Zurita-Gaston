import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/models/usuario'
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   // Array privado para almacenar los usuarios
   private usuarios: Usuario[] = [];
   //referencir Auth de FireBase en el servicio
   constructor(public auth: AngularFireAuth) { }
   //FUNCION PARA REGISTRO
   registrar(email: string, password: string) {
     //retoma el valor que es creado con el metodo "createEmail..."
     return this.auth.createUserWithEmailAndPassword(email, password)
   }
   //FUNCION PARA INICIO DE SESIÓN
   iniciarSesion(email:string, password:string){
     //validar la informacion del usuario-> saber si existe en la coleccion
     return this.auth.signInWithEmailAndPassword(email,password)
 
   }
 
   //FUNCION PARA CERRAR SESION
 cerrarsesion(){
   //devuelve una promesa vacia->quita el token
   return this.auth.signOut();
 }
   //FUNCION PARA TOMAR EL UID
   async obtenerid(){
     //nos va a generar una promesa y la constante la va a capturar
     const user= await this.auth.currentUser;
     /*
     si el usuario no respeta la estructura de la interfaz /
     si tuvo problemas para el registro-> mal internet
     */
     if(user == null){
       return null
     }
     else{
       return user.uid
     }
   }
 
   /* codigo comentado para evitar conflctos
     // Método para agregar un nuevo usuario a la colección
     agregarUsuario(usuario: Usuario) {
       this.usuarios.push(usuario); // Agrega el usuario al array de usuarios
     }
   
     // Método para obtener la lista de usuarios
     getUsuarios(): Usuario[] {
       return this.usuarios; // Devuelve la lista de usuarios almacenados
     }
     */
 }
