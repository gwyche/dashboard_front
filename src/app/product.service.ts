import { Injectable } from '@angular/core';
import { Product } from '../app/main/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  modifyDBRecord(){
    
  }



}
