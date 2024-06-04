import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { AddEmpresaComponent } from './components/add-empresa/add-empresa.component';
import { TutoresListComponent } from './components/tutores-list/tutores-list.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';
import { LoginComponent } from './components/login/login.component';
import { AddSeguimientoComponent } from './components/add-seguimiento/add-seguimiento.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: AlumnosListComponent },
  { path: 'add-alumno', component: AddAlumnoComponent },
  { path: 'empresas', component: EmpresasListComponent },
  { path: 'add-empresa', component: AddEmpresaComponent },
  { path: 'tutores', component: TutoresListComponent },
  { path: 'add-tutor', component: AddTutorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-seguimiento', component: AddSeguimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
