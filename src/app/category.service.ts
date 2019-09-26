import { Injectable } from '@angular/core';
import { Category } from '../app/main/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  categoryUrl: string ="http://localhost:8080/categories";



  constructor(private http: HttpClient) { }



  getCategoriesWeb(): Observable<any>{
    return this.http.get<any>(this.categoryUrl);
  }  





}
