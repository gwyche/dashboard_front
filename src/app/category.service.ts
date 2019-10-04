import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  categoryUrl: string = "https://gwychedashboard.herokuapp.com/categories?size=100";



  constructor(private http: HttpClient) { }



  getCategoriesWeb(): Observable<any>{
    return this.http.get<any>(this.categoryUrl);
  }  



dropDBRecord(id: number){
  var recordAddress: string = "https://gwychedashboard.herokuapp.com/categories/"+id;
  this.http.delete(recordAddress).subscribe();
}


newRecord(data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.post("https://gwychedashboard.herokuapp.com/categories/", data, httpOptions).subscribe();
}


updateRecord(id: number, data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.put("https://gwychedashboard.herokuapp.com/categories/"+id, data, httpOptions).subscribe();
}











}
