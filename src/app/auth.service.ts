import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http ,Response } from '@angular/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
     // console.log(data)
  });
   }
   public getJSON(): Observable<Response> {
    return this.http.get("./assets/latlong.json")
}

}
