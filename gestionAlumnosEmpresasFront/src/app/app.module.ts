import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { EmpresasListComponent } from './components/empresas-list/empresas-list.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
import { AddEmpresaComponent } from './components/add-empresa/add-empresa.component';
import { AddTutorComponent } from './components/add-tutor/add-tutor.component';
import { AddSeguimientoComponent } from './components/add-seguimiento/add-seguimiento.component';
import { TutoresListComponent } from './components/tutores-list/tutores-list.component';
import { HttpService } from './services/httpService';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

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
    TutoresListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Añadir FormsModule aquí
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
