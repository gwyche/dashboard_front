import { Injectable } from '@angular/core';
import { Supplier } from '../app/main/Supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {



  supplierUrl: string = "http://localhost:8080/suppliers";



  constructor(private http: HttpClient) { }



  getSuppliersWeb(): Observable<any>{
    return this.http.get<any>(this.supplierUrl);
  }

///////////////////////////////RECYCLED CODE

dropDBRecord(id: number){
  var recordAddress: string = "http://localhost:8080/suppliers/"+id;
  this.http.delete(recordAddress).subscribe();
}


newRecord(data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.post("http://localhost:8080/suppliers/", data, httpOptions).subscribe();
}


updateRecord(id: number, data: String){

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

    let result = this.http.put("http://localhost:8080/suppliers/"+id, data, httpOptions).subscribe();
}











}
