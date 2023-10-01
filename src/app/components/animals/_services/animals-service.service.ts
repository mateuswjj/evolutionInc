import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animals } from '../_models/animals.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  API_KEY = ''

  constructor(private http: HttpClient) { }

  getAnimalsByName(name: string){
    const url = 'https://api.api-ninjas.com/v1/animals?name='+ name
    const headers = new HttpHeaders({ 'X-Api-Key': this.API_KEY });

      return this.http.get(url, { headers: headers })
  }
}
