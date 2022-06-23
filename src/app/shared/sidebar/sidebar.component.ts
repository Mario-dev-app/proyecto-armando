import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }


  items: MenuItem[] = [];

  ngOnInit(): void {

    this.items = [
      {
        label: 'Registrar',
        items: [
          { label: 'Persona', icon: 'pi pi-user', routerLink: 'persona' },
          { label: 'Artículo', icon: 'pi pi-box', routerLink: 'articulo' },
          { label: 'Curso', icon: 'pi pi-book', routerLink: 'curso' },
          { label: 'Aula', icon: 'pi pi-pencil' },
          { label: 'Moneda', icon: 'pi pi-money-bill' },
          { label: 'Sala', icon: 'pi pi-discord' },
          { label: 'Horario', icon: 'pi pi-clock' },
          { label: 'Dia/Horario', icon: 'pi pi-calendar' },
          { label: 'Lista/Precio', icon: 'pi pi-tags' },
          { label: 'Tipo Ocurrencia', icon: 'pi pi-briefcase' },
          { label: 'Tipo Persona', icon: 'pi pi-user-edit' },
          { label: 'Tipo Sala', icon: 'pi pi-clone' },
          { label: 'Tipo Mensaje', icon: 'pi pi-send' }
        ]
      },
      {
        label: 'Matrícula',
        items: [
          { label: 'Apoderado por alumno', icon: 'pi pi-id-card' },
          { label: 'Alumno por aula', icon: 'pi pi-home' }
        ]
      },
      {
        label: 'Registro',
        items: [
          { label: 'Asistencia', icon: 'pi pi-check-square' },
          { label: 'Calificaciones', icon: 'pi pi-sort-numeric-up' }
        ]
      },
      {
        label: 'Administración',
        items: [
          { label: 'Colegio', icon: 'pi pi-building' },
          { label: 'Periodo', icon: 'pi pi-calendar-times' },
          { label: 'Colegio por periodo', icon: 'pi pi-home' },
          { label: 'Sub-periodo', icon: 'pi pi-chart-pie' }
        ]
      }
    ];
  }

  redirect(){
    this.router.navigateByUrl('/inicio');
  }

}
