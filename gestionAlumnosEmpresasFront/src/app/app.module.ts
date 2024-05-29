import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { AddEmpresaComponent } from './add-empresa/add-empresa.component';
import { AddTutorComponent } from './add-tutor/add-tutor.component';
import { AddSeguimientoComponent } from './add-seguimiento/add-seguimiento.component';
import { TutoresListComponent } from './tutores-list/tutores-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AlumnosListComponent,
    EmpresasListComponent,
    AddAlumnoComponent,
    AddEmpresaComponent,
    AddTutorComponent,
    AddSeguimientoComponent,
    TutoresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Añadir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
