import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DesenvolvedorModel } from './desenvolvedores/desenvolvedorModel';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService {

  constructor(private http: HttpClient) { }

  listDeveloperService(): Observable<any> {
    return this.http.get('http://localhost:3000/developers/');
  }

  createDeveloperService(developer: DesenvolvedorModel): Observable<any> {
    return this.http.post('http://localhost:3000/developers/', developer);
  }

  updateDeveloperService(id: any, developer: DesenvolvedorModel): Observable<any> {
    return this.http.put('http://localhost:3000/developers/'.concat(id), developer);
  }

  removeDeveloperService(id: any){
    return this.http.delete('http://localhost:3000/developers/'.concat(id));
  }

}
