import { CursoComponent } from './curso/curso.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { PersonaComponent } from './persona/persona.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'persona',
        component: PersonaComponent
      },
      {
        path: 'articulo',
        component: ArticuloComponent
      },
      {
        path: 'curso',
        component: CursoComponent
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
