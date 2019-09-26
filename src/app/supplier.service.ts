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

}
