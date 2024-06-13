import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CONSTANTES } from '../config/Constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(nombre: string, password: string) {
    const body = { nombre, password };
    this.http.post(CONSTANTES.apiUrl + '/auth/login', body, { responseType: 'text' }).subscribe(
      (response: any) => {
        console.log(response); // Verificar la respuesta en la consola
        this.loggedIn = true;
        this.router.navigate(['/home']);
      },
      (error: any) => {
        console.error('Error logging in', error);
        alert("Credenciales erroneas")
      }
    );
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
