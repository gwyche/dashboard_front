import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Product } from '../main/Product';
import { FormGroup, FormControl } from '@angular/forms';
import { StateObject } from '../main/StateObject';
import { Supplier } from '../main/Supplier';
import { SupplierStateObject } from '../main2/SupplierStateObject';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  suppliers1: Object;
  // categories1: Object;
  // products1: Object;

  suppliers: any;
  // categories: any;
  // products: any;

  state: number = 0;


  row1: Supplier;
  row2: Supplier;
  row3: Supplier;
  row4: Supplier;
  row5: Supplier;
  row6: Supplier;
  row7: Supplier;
  row8: Supplier;


  page: number = 1;

  constructor(private productService: ProductService, private supplierService: SupplierService, private categoryService: CategoryService) { }


  getSuppliers(){
    this.supplierService.getSuppliersWeb().subscribe(s => { this.suppliers1 = s;
      this.suppliers = this.suppliers1._embedded.suppliers;
      //console.log(this.suppliers);
      //console.log("Suppliers "+this.state);
      this.state++;
      this.populateChartData(this.page);

    });
  }


  // getCategories(){
  //   this.categoryService.getCategoriesWeb().subscribe(c => {this.categories1 = c;
  //     this.categories = this.categories1._embedded.categories;
  //     //console.log(this.categories);
  //     //console.log("Categories "+this.state);
  //     this.state++;
  //     this.populateChartData(this.page);
  //   });

  // }

  // getProducts(){
  //   this.productService.getProductsWeb(this.page).subscribe(p => {this.products1 = p;
  //     this.products = this.products1._embedded.products;
  //     //console.log(this.products);
  //     //console.log("Products "+this.state);
  //     //console.log(p);
  //     this.state++;
  //     this.populateChartData(this.page);
  //   //this.testout();
  //   });
  //   //this.populateChartData(1);
  // }


  populateChartData(page: number){
      if(this.state >= 1){
      // this.products[0].catName = (this.categories[this.products[0].category - 1].categoryName);
      this.suppliers[0].supplierName = this.suppliers[0].supplierName ;
      this.suppliers[0].supplierId = this.getID(1);
      this.row1 = this.suppliers[0];

      // this.products[1].catName = (this.categories[this.products[1].category - 1].categoryName);
      this.suppliers[1].supplierName = this.suppliers[1].supplierName ;
      this.suppliers[1].supplierId = this.getID(2);
      this.row2 = this.suppliers[1];

      // this.products[2].catName = (this.categories[this.products[2].category - 1].categoryName);
      this.suppliers[2].supplierName = this.suppliers[2].supplierName ;
      this.suppliers[2].supplierId = this.getID(3);
      this.row3 = this.suppliers[2];

      // this.products[3].catName = (this.categories[this.products[3].category - 1].categoryName);
      this.suppliers[3].supplierName = this.suppliers[3].supplierName ;
      this.suppliers[3].supplierId = this.getID(4);
      this.row4 = this.suppliers[3];

      // this.products[4].catName = (this.categories[this.products[4].category - 1].categoryName);
      this.suppliers[4].supplierName = this.suppliers[4].supplierName ;
      this.suppliers[4].supplierId= this.getID(5);
      this.row5 = this.suppliers[4];

      // this.products[5].catName = (this.categories[this.products[5].category - 1].categoryName);
      this.suppliers[5].supplierName = this.suppliers[5].supplierName ;
      this.suppliers[5].supplierId = this.getID(6);
      this.row6 = this.suppliers[5];
      
      // this.products[6].catName = (this.categories[this.products[6].category - 1].categoryName);
      this.suppliers[6].supplierName = this.suppliers[6].supplierName ;
      this.suppliers[6].supplierId = this.getID(7);
      this.row7 = this.suppliers[6];
      
      // this.products[7].catName = (this.categories[this.products[7].category - 1].categoryName);
      this.suppliers[7].supplierName = this.suppliers[7].supplierName ;
      this.suppliers[7].supplierId = this.getID(8);
      this.row8 = this.suppliers[7];
      }else{
        //console.log("Download Incomplete");
      }
  }

  getID(selectedRow: number): number{
    //console.log(this.products[selectedRow - 1]._links.self.href);
    var hrefWanted = this.suppliers[selectedRow - 1]._links.self.href;
    var newString = hrefWanted.toString();
    var array = newString.split("http://localhost:8080/suppliers/");
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
    this.supplierService.dropDBRecord(id);
    this.ngOnInit();
  }

 //POSTING SUBSYS
  putForm = new FormGroup({
    // salePrice: new FormControl(''),
    supplierName: new FormControl(''),
    supplierId: new FormControl('')
    // availability: new FormControl(''),
    // category: new FormControl(''),
    // fullPrice: new FormControl(''),
    // productName: new FormControl('')
  });


  chosenRow: Supplier;

  putCondition = new SupplierStateObject()


  initializePutState(){
    this.putForm.setValue(this.putCondition.beginState);
  }

  putId: number;

  setPutChoice(selection: number){

    this.show = true;

    this.putId = this.getID(selection);

    switch(selection) {

      case 1:
        this.chosenRow = this.row1;
        break;
      case 2:
        this.chosenRow = this.row2;
        break;
      case 3:
        this.chosenRow = this.row3;
        break;
      case 4:
        this.chosenRow = this.row4;
        break;
      case 5:
        this.chosenRow = this.row5;
        break;
      case 6:
        this.chosenRow = this.row6;
        break;
      case 7:
        this.chosenRow = this.row7;
        break;
       case 8:
        this.chosenRow = this.row8;
        break;
    }


    // this.putCondition.beginState.productName = this.chosenRow.productName.valueOf();
    // this.putCondition.beginState.fullPrice = this.chosenRow.fullPrice;
    // this.putCondition.beginState.salePrice = this.chosenRow.salePrice;
    // this.putCondition.beginState.category = this.chosenRow.category;
    this.putCondition.beginState.supplierId = this.chosenRow.supplierId;
    this.putCondition.beginState.supplierName = this.chosenRow.supplierName.valueOf();
    // this.putCondition.beginState.availability = this.chosenRow.availability;

    this.initializePutState();
    // console.log(this.putCondition.beginState.productName);
  }


  // sortByID(){
  //   this.productService.sort1D = "";
  //   this.ngOnInit();
  // }

  // sortByProdName(){
  //   this.productService.sort1D = "productName";
  //   this.ngOnInit();
  // }

  // sortByCategory(){
  //   this.productService.sort1D = "category";
  //   this.ngOnInit();
  // }

  // sortBySupplier(){
  //   this.productService.sort1D = "supplier";
  //   this.ngOnInit();
  // }

  // sortBySalePrice(){
  //   this.productService.sort1D = "salePrice";
  //   this.ngOnInit();
  // }


  
  putChanges(){
    let dataFromForm = this.putForm.value
    let dataJson = JSON.stringify(dataFromForm);
    this.supplierService.updateRecord(this.putId, dataJson);
    this.show = false;
  }


  show: boolean = false;

  ngOnInit() {
      var correctedPage = this.page - 1;
      var adjustedUrl: string = "http://localhost:8080/suppliers?page="+correctedPage+"&size=8";
      this.supplierService.supplierUrl = adjustedUrl;

      this.initializePutState();

      this.show = false;
      
      this.state = 0;

      this.row1 = new Supplier();
      this.row2 = new Supplier();
      this.row3 = new Supplier();
      this.row4 = new Supplier();
      this.row5 = new Supplier();
      this.row6 = new Supplier();
      this.row7 = new Supplier();
      this.row8 = new Supplier();

      this.getSuppliers();
      // this.getCategories();
      // this.getProducts();
  }



}
