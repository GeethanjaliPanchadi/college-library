import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Registrations } from '../Models/registrations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
  private baseurl="https://sheetdb.io/api/v1/q7oxaornoqfev";
  constructor(private http:HttpClient) { }
  onsubmit(register:Registrations):Observable<any>{
  return this.http.post(this.baseurl,register);
}
}
