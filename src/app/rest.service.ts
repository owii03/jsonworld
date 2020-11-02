import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worlds } from './Worlds';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string  = "http://localhost:3000/Worlds";

  getWorlds()
  {
    return this.http.get<Worlds[]>(this.url);
  }


}
