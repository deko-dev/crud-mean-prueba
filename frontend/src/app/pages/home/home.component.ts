import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];
  cargando : boolean = true;


  constructor(
    private _usuariosService: UsuariosService
  ) { 

    this._usuariosService.getUsuarios()
                        .subscribe( (usuarios: Usuario[]) => {

                          if( usuarios.length === 0 ){
                            setTimeout(()=>{

                              this.cargando = false;

                            }, 2000)

                            return;
                          }

                          setTimeout(() => {
                            
                            this.cargando = false;
                            this.usuarios = usuarios; 

                          }, 2000);

                          

                        } )

  }

  ngOnInit(): void {
  }

  borrarUsuario( _id:string, i:number ){

    this._usuariosService.borrarUsuario(_id)
                        .subscribe((res)=> {

                          this.usuarios.splice(i, 1);

                        })

  }

}
