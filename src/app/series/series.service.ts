import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl: string = environment.baseUrl + 'serie';
 

constructor(private http:HttpClient) { }

getSeries():Observable<Serie[]>{
  return this.http.get<Serie[]>( this.apiUrl)
}

}
