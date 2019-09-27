import { Component, OnInit } from '@angular/core';
import { PostObject } from '../main/PostObject';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';



@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaComponent implements OnInit {

  salePrice: number = 1;
  supplier: number = 1;
  availability: boolean = false;
  category: number = 1;
  fullPrice: number = 1;
  product_name: String = "blank";



  constructor(private prodServe: ProductService, private catServe: CategoryService, private supServe: SupplierService) { }

  createPost(){
    //Test data
    let data = { salePrice:this.salePrice,supplier:this.supplier,availability:this.availability,category:this.category,fullPrice:this.fullPrice,product_name:this.product_name};
    let dataJson = JSON.stringify(data);
    console.log(dataJson);
   
    this.prodServe.newRecord(dataJson);

  }


  ngOnInit() {
    //this.createPost();
  }

}
