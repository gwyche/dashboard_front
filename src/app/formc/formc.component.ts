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


  postSent: boolean = false;


  constructor(private prodServe: ProductService, private catServe: CategoryService, private supServe: SupplierService) { }

  createPost(){
    let dataFromForm = this.createForm.value
    let dataJson = JSON.stringify(dataFromForm);
    console.log(dataJson);
   
    this.catServe.newRecord(dataJson);
    this.postSent = true;
    
  }


  ngOnInit() {
    this.postSent = false;
  }

}
