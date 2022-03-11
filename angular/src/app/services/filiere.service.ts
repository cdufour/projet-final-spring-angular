import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filiere } from '../interfaces/filiere';
import { API_URL } from 'src/config/settings';

const API = API_URL + '/filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(API);
  }

  getById(id: number): Observable<Filiere> {
    return this.http.get<Filiere>(API + '/' + id);
  }

  post(filiere: Filiere) {
    return this.http.post(API, filiere);
  }

  update(filiere: Filiere) {
    return this.http.put(API, filiere);
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id);
  }
}
