import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { registroComponent } from './components/registro/registro.component';
import { ingresoComponent } from './components/ingreso/ingreso.component';
import { perfilUsuarioComponent } from  './components/perfilUsuario/perfilUsuario.component';


const routes : Routes = [
    //{path:'', component : },
    {path : 'registro' , component : registroComponent},
    {path: 'ingreso', component: ingresoComponent},
    {path: 'perfil', component: perfilUsuarioComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class  AppRoutingModule{

}
