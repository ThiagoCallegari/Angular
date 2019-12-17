import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getAll() {
   return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  public get(id : number) {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
