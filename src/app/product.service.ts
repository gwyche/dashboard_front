import { Injectable } from '@angular/core';
import { Product } from '../app/main/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostObject } from '../app/main/PostObject';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  



  constructor(private http: HttpClient) { }


  getProductsWeb(page: number): Observable<any>{
    page--;
    var productUrl: string = "http://localhost:8080/products?page="+page+"&size=8";
    return this.http.get<any>(productUrl);
  }

  dropDBRecord(id: number){
    var recordAddress: string = "http://localhost:8080/products/"+id;
    this.http.delete(recordAddress).subscribe();
  }

  modifyDBRecord(id: number){
    var recordAddress: string = "http://localhost:8080/products/"+id;
    //this.http.put(var recordAddress: string = "http://localhost:8080/products/"+id).subscribe();

  }

  newRecord(id: number){
    var postAddress: string = "http://localhost:8080/products/"+id;
    var putData: PostObject;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };

    var r = this.http.post<any>(postAddress, putData, httpOptions);
    this.http.post

  }



}
