import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module, ModulePost } from '../interfaces/module';
import { API_URL } from 'src/config/settings';

const API = API_URL + '/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Module[]> {
    return this.http.get<Module[]>(API);
  }

  getById(id: number): Observable<Module> {
    return this.http.get<Module>(API + '/' + id)
  }

  post(module: ModulePost) {
    return this.http.post(API, module);
  }

  update(module: ModulePost) {
    return this.http.put(API, module);
  }

  delete(id: number) {
    return this.http.delete(API + '/' + id);
  }
}
