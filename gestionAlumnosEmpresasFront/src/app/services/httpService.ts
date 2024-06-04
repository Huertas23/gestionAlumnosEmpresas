import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Promise<any> {
    return firstValueFrom(this.httpClient.get(url));
  }

  post(url: string, data: any): Promise<any> {
    return firstValueFrom(this.httpClient.post(url, data));
  }

  put(url: string, data: any): Promise<any> {
    return firstValueFrom(this.httpClient.put(url, data));
  }

  delete(url: string): Promise<any> {
    return firstValueFrom(this.httpClient.delete(url));
  }
}
