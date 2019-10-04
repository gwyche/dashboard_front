import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductService {



  sort1D = "";



  constructor(private http: HttpClient) { }


  getProductsWeb(page: number): Observable<any>{
    page--;
    var productUrl: string = "https://gwychedashboard.herokuapp.com/products?page="+page+"&size=8&sort="+this.sort1D;
    return this.http.get<any>(productUrl);
  }

  dropDBRecord(id: number){
    var recordAddress: string = "https://gwychedashboard.herokuapp.com/products/"+id;
    this.http.delete(recordAddress).subscribe();
  }


  newRecord(data: String){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

      let result = this.http.post("https://gwychedashboard.herokuapp.com/products/", data, httpOptions).subscribe();
  }


  updateRecord(id: number, data: String){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

      let result = this.http.put("https://gwychedashboard.herokuapp.com/products/"+id, data, httpOptions).subscribe();
  }



}
