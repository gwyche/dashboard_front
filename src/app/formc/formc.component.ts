import { Component, OnInit } from '@angular/core';
import { PostObject } from '../main/PostObject';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.css']
})
export class FormcComponent implements OnInit {

  createForm = new FormGroup({
    categoryName: new FormControl(''),

  });





  constructor(private prodServe: ProductService, private catServe: CategoryService, private supServe: SupplierService) { }

  createPost(){
    let dataFromForm = this.createForm.value
    //let data = { salePrice:this.salePrice,supplier:this.supplier,availability:this.availability,category:this.category,fullPrice:this.fullPrice,productName:this.productName};
    let dataJson = JSON.stringify(dataFromForm);
    console.log(dataJson);
   
    this.catServe.newRecord(dataJson);

  }


  ngOnInit() {
  }

}
