import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SupplierService {



  supplierUrl: string = "https://gwychedashboard.herokuapp.com/suppliers?size=100";



  constructor(private http: HttpClient) { }



  getSuppliersWeb(): Observable<any>{
    return this.http.get<any>(this.supplierUrl);
  }



dropDBRecord(id: number){
  var recordAddress: string = "https://gwychedashboard.herokuapp.com/suppliers/"+id;
  this.http.delete(recordAddress).subscribe();
}


newRecord(data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.post("https://gwychedashboard.herokuapp.com/suppliers/", data, httpOptions).subscribe();
}


updateRecord(id: number, data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.put("https://gwychedashboard.herokuapp.com/suppliers/"+id, data, httpOptions).subscribe();
}











}
