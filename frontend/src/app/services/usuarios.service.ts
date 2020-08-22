import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Interface para manejar los datos del usuario
export interface Usuario {
  _id?:string
  nombres: string,
  apellidos: string,
  telefono: number,
  correo: string,
  direccion: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // Url de server en NodeJS
  private URL = 'http://localhost:3000/api/usuarios';


  constructor(
    private http: HttpClient
  ) { }

  // Metodo para obtener todos los usuarios
  getUsuarios() {
    return  this.http.get(this.URL);
  }

  // Metodo para crear un Usuario
  crearUsuario( usuario: Usuario ){
    return this.http.post(this.URL, usuario);
  }

  // Metodo para obtener un solo usuario
  verUsuario( _id: string ){
    return this.http.get(`${this.URL}/${_id}`);
  }

  // Metodo para actualizar un usuario
  editarUsuario( usuario: Usuario ) {
    return this.http.put(`${this.URL}/${usuario._id}`, usuario);
  }

  // Metodo para borrar un usuario
  borrarUsuario(_id:string){
    return this.http.delete(`${this.URL}/${_id}`);
  }


}
