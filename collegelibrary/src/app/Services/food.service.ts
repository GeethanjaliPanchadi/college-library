import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseurl="";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Food[]>{
    return this.http.get<Food[]>(this.baseurl);
  }
}
