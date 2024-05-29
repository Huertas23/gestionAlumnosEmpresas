import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';
import { TutoresListComponent } from './tutores-list/tutores-list.component';
import { AddTutorComponent } from './add-tutor/add-tutor.component';
import { LoginComponent } from './login/login.component';
import { AddSeguimientoComponent } from './add-seguimiento/add-seguimiento.component';

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
  { path: 'add-seguimiento', component: AddSeguimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
