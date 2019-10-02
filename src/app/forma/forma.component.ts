import { Component, OnInit } from '@angular/core';
import { PostObject } from '../main/PostObject';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {

  createForm = new FormGroup({
    salePrice: new FormControl(''),
    supplier: new FormControl(''),
    availability: new FormControl(''),
    category: new FormControl(''),
    fullPrice: new FormControl(''),
    productName: new FormControl('')
  });

  salePrice: number = 1;
  supplier: number = 1;
  availability: boolean = false;
  category: number = 1;
  fullPrice: number = 1;
  productName: String = "blank";


  postSent: boolean = false;


  constructor(private prodServe: ProductService, private catServe: CategoryService, private supServe: SupplierService) { }

  createPost(){
    let dataFromForm = this.createForm.value
    //let data = { salePrice:this.salePrice,supplier:this.supplier,availability:this.availability,category:this.category,fullPrice:this.fullPrice,productName:this.productName};
    let dataJson = JSON.stringify(dataFromForm);
    console.log(dataJson);
   
    this.prodServe.newRecord(dataJson);
    this.postSent = true;
  }


  ngOnInit() {
    this.postSent = false;
  }

}
