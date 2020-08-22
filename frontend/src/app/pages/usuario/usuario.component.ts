import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService, Usuario } from '../../services/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  forma: FormGroup;
  usuarioSelected: Usuario
  _id: string = '';
  nombreUsuario:string = ''
  isNeW: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _usuariosService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.activatedRoute.params
                      .subscribe((res)=> {

                        if( !res.id ){

                          this.isNeW = true
                          this._id = '';

                          return;
                        }

                        this.isNeW = false;
                        this._id = res.id;

                      })

      this._usuariosService.verUsuario(this._id)                
                          .subscribe((res:Usuario)=>{

                            this.nombreUsuario = res.nombres;

                            this.cargarData(res);

                          })


    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  validacion(campo:string):boolean{

    return this.forma.get(campo).invalid && this.forma.get(campo).touched;

  }

  crearFormulario() {

    this.forma = this.fb.group({
      _id: [''],
      nombres:['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      direccion: ['', [Validators.required]]
    })
    
  }


  guardar(){

    this.usuarioSelected = this.forma.value

    if( this.forma.valid ){

      if(!this.isNeW){
        this._usuariosService.editarUsuario(this.usuarioSelected)
                            .subscribe((res) => {
                              this.router.navigateByUrl('/');
                            });
      }else {
        this._usuariosService.crearUsuario(this.usuarioSelected)
                            .subscribe((res) => {
                              this.router.navigateByUrl('/');
                            });
      }

    }
  }


  cargarData(usuario: Usuario){

    this.forma = this.fb.group({
      _id: [usuario._id],
      nombres: [usuario.nombres],
      apellidos: [usuario.apellidos],
      telefono: [usuario.telefono],
      correo: [usuario.correo],
      direccion: [usuario.direccion]
    })

  }


}
