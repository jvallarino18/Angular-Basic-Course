import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponente } from './Contador/Contador/contador.component';

// Tarea : crear un nuevo modulo llamado contadorModule; denemos: 
// Declaraciones, importaciones,exportaciones,

import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { heroesModule } from './Heroes/heroes.module';
import { ListadoComponent } from './Heroes/listado/listado.component';
import { ContadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponente,
  
  ],
  imports: [
    BrowserModule,
    heroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
