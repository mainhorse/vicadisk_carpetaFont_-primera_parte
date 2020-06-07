import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// Importar Módulo Formulario
import { FormsModule } from '@angular/forms';
// Importar el modulo HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// importamos sweetalert para las alertas

// importar servcio usuario
import { UsuarioService } from './service/usuario.service'

import { AppComponent } from './app.component';
import { banerInicioComponent } from './components/banerInicio/banerInicio.component';
import { ingRegistroComponent } from './components/ingRegistro/ingRegistro.component';
import { registroComponent } from './components/registro/registro.component';
import { ingresoComponent } from './components/ingreso/ingreso.component';
import { perfilUsuarioComponent } from './components/perfilUsuario/perfilUsuario.component';


@NgModule({
  declarations: [
    AppComponent,
    banerInicioComponent,
    ingRegistroComponent,
    registroComponent,
    ingresoComponent,
    perfilUsuarioComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
