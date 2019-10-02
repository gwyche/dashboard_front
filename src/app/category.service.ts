import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  categoryUrl: string = "http://localhost:8080/categories?size=100";



  constructor(private http: HttpClient) { }



  getCategoriesWeb(): Observable<any>{
    return this.http.get<any>(this.categoryUrl);
  }  



dropDBRecord(id: number){
  var recordAddress: string = "http://localhost:8080/categories/"+id;
  this.http.delete(recordAddress).subscribe();
}


newRecord(data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.post("http://localhost:8080/categories/", data, httpOptions).subscribe();
}


updateRecord(id: number, data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.put("http://localhost:8080/categories/"+id, data, httpOptions).subscribe();
}











}
