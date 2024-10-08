import { Injectable } from '@angular/core';
// Cloud Firestore -> accedemos a las colecciones
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {

    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){


    return new Promise(async (resolve, reject) => {

      try {
        usuario.uid = id;


        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        resolve (resultado);
        // Bloque CATCH encapsula la lógica RECHAZADA
      } catch (error) {
        // captura una falla y la vuelve un 'error'
        reject (error);
      }
    })
  }
}
