import { Component } from "@angular/core";
// modelo que se hizo para validar correo y contraseña
import { validacion } from "../../modelo/validacion";
// importamos el servicio
import { UsuarioService } from '../../service/usuario.service';

import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
    selector: 'app-ingreso',
    templateUrl :'ingreso.component.html',
    styleUrls: ['ingreso.component.css']
})


export class ingresoComponent{
    

    public usuarioIngreso : validacion;

    constructor(private usuarioServicio : UsuarioService,
        private _router : Router
        ){
      this.usuarioIngreso = new validacion('',''); 
    }

    ngOnInit(): void{

    }


    ingresoUsuario(){
        this.usuarioServicio.validacion(this.usuarioIngreso).subscribe((response : any)=>{
            let validar = response.usuario;
            this.usuarioIngreso = validar;
            if(!this.usuarioIngreso.correo){
                alert("Datos invalidos");
            } else{
                if(!this.usuarioIngreso.contrasena){
                    alert("Datos Invalidos");
                } else {
                    this.usuarioIngreso = new validacion('','');
                    this._router.navigate(['/perfil'])
                }
            }
        },
        error =>{
            var errorMensaje = <any>error;
            if(errorMensaje != null){
                console.log(error);
            }
        }
        )
    }
}