import { SharedModule } from './../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaComponent } from './persona/persona.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CursoComponent } from './curso/curso.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    InicioComponent,
    PersonaComponent,
    ArticuloComponent,
    CursoComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
