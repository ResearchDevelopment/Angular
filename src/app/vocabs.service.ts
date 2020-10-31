import { Injectable } from '@angular/core';
import { Vocabulary } from './types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VocabsService {

  constructor(
    private http: HttpClient,) { }

    
  getVocabs(): Observable<Vocabulary[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'http://localhost/API/api/Vocabulary'
      })
    };
    return this.http.get<Vocabulary[]>('http://localhost/API/api/Vocabulary',
   httpOptions);
  }
}
