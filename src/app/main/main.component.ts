import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { HttpClient } from '@angular/common/http';
import { Category } from '../main/Category';
import { Product } from '../main/Product';
import { Supplier } from '../main/Supplier';
import { DisplayObject } from '../main/DisplayObject';
import { DisplayArray } from '../main/DisplayArray';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  suppliers1: Object;
  categories1: Object;
  products1: Object;

  suppliers: any;
  categories: any;
  products: any;

  state: number = 0;


  row1: Product;
  row2: Product;
  row3: Product;
  row4: Product;
  row5: Product;
  row6: Product;
  row7: Product;
  row8: Product;


  page: number = 1;

  constructor(private productService: ProductService, private supplierService: SupplierService, private categoryService: CategoryService) { }


  getSuppliers(){
    this.supplierService.getSuppliersWeb().subscribe(s => { this.suppliers1 = s;
      this.suppliers = this.suppliers1._embedded.suppliers;
      //console.log(this.suppliers);
      //console.log("Suppliers "+this.state);
      this.state++;
      this.populateChartData(this.page);

    });//Alternate syntax
  }


  getCategories(){
    this.categoryService.getCategoriesWeb().subscribe(c => {this.categories1 = c;
      this.categories = this.categories1._embedded.categories;
      //console.log(this.categories);
      //console.log("Categories "+this.state);
      this.state++;
      this.populateChartData(this.page);
    });

  }

  getProducts(){
    this.productService.getProductsWeb(this.page).subscribe(p => {this.products1 = p;
      this.products = this.products1._embedded.products;
      //console.log(this.products);
      //console.log("Products "+this.state);
      //console.log(p);
      this.state++;
      this.populateChartData(this.page);
    //this.testout();
    });
    //this.populateChartData(1);
  }


  populateChartData(page: number){
      if(this.state >= 3){
      this.products[0].catName = (this.categories[this.products[0].category - 1].categoryName);
      this.products[0].supName = (this.suppliers[this.products[0].supplier - 1].supplierName);
      this.products[0].id = this.getID(1);
      this.row1 = this.products[0];

      this.products[1].catName = (this.categories[this.products[1].category - 1].categoryName);
      this.products[1].supName = (this.suppliers[this.products[1].supplier - 1].supplierName);
      this.products[1].id = this.getID(2);
      this.row2 = this.products[1];

      this.products[2].catName = (this.categories[this.products[2].category - 1].categoryName);
      this.products[2].supName = (this.suppliers[this.products[2].supplier - 1].supplierName);
      this.products[2].id = this.getID(3);
      this.row3 = this.products[2];

      this.products[3].catName = (this.categories[this.products[3].category - 1].categoryName);
      this.products[3].supName = (this.suppliers[this.products[3].supplier - 1].supplierName);
      this.products[3].id = this.getID(4);
      this.row4 = this.products[3];

      this.products[4].catName = (this.categories[this.products[4].category - 1].categoryName);
      this.products[4].supName = (this.suppliers[this.products[4].supplier - 1].supplierName);
      this.products[4].id = this.getID(5);
      this.row5 = this.products[4];

      this.products[5].catName = (this.categories[this.products[5].category - 1].categoryName);
      this.products[5].supName = (this.suppliers[this.products[5].supplier - 1].supplierName);
      this.products[5].id = this.getID(6);
      this.row6 = this.products[5];
      
      this.products[6].catName = (this.categories[this.products[6].category - 1].categoryName);
      this.products[6].supName = (this.suppliers[this.products[6].supplier - 1].supplierName);
      this.products[6].id = this.getID(7);
      this.row7 = this.products[6];
      
      this.products[7].catName = (this.categories[this.products[7].category - 1].categoryName);
      this.products[7].supName = (this.suppliers[this.products[7].supplier - 1].supplierName);
      this.products[7].id = this.getID(8);
      this.row8 = this.products[7];
      }else{
        //console.log("Download Incomplete");
      }
  }

  getID(selectedRow: number): number{
    //console.log(this.products[selectedRow - 1]._links.self.href);
    var hrefWanted = this.products[selectedRow - 1]._links.self.href;
    var newString = hrefWanted.toString();
    var array = newString.split("http://localhost:8080/products/");
    var output = parseInt(array[1]);
    //console.log(output);
    return output;
  }

  page1(){
    this.page = 1;
    this.ngOnInit();
  }


  prev(){
    if(this.page != 1){
      this.page--;
      this.ngOnInit();
    }
  }

  next(){
      this.page++;
      this.ngOnInit();
  }

  deleteRow(row: number){
    var id = this.getID(row);
    this.productService.dropDBRecord(id);
    this.ngOnInit();
  }

  ngOnInit() {
      this.state = 0;

      this.row1 = new Product();
      this.row2 = new Product();
      this.row3 = new Product();
      this.row4 = new Product();
      this.row5 = new Product();
      this.row6 = new Product();
      this.row7 = new Product();
      this.row8 = new Product();

      this.getSuppliers();
      this.getCategories();
      this.getProducts();
  }

}
