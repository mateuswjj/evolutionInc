import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalsServiceService {
  API_KEY = ''

  constructor(private http: HttpClient) { }

  getAnimalsByName(name: string){
    const url = 'https://api.api-ninjas.com/v1/animals?name='+ name
    const headers = new HttpHeaders({ 'X-Api-Key': this.API_KEY });

    0
    return this.http.get(url, { headers: headers })
  }
}
