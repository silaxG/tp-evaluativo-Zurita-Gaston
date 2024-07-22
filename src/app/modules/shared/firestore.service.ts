import { Injectable } from '@angular/core';
//Cloud Firessotre ->accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*definimos de forma privada la coleccion de usuarios para que no sea accesible en toda la aplicacion. lo definimos como una coleccion de Firestore que respete la estructura de nuestra interfaz 'Usuario"
  */
  private usuariosCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) {
    /*
    usuariosCollection va a definir la nueva coleccion 'usuarios que estara en nuestra base de datos
    */
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }
  agregarusuario(usuario: Usuario, id: string) {
    /*
    Creamos una nueva PROMESA junto los metodos:
    RESOLVE: promesa resuelta -> funciona correctamente
    REJECT: promesa rechazada -> ocurrio un error
    */
    return new Promise(async (resolve, reject) => {
      //el bloque TRY encapsula la logica RESUELTA
      try {
        usuario.uid = id;

        /*
        cont resultado= coleccion de usuarios, envia como numero de documento el UID
        y setea la informacion que ingresamos en el formulario de REGISTRO */

        const resultado = await this.usuariosCollection.doc(id).set(usuario)

        resolve(resultado)
        
      }catch(error){
        reject(error);
      }
    })
  }
}