import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { Product } from '../main/Product';
import { FormGroup, FormControl } from '@angular/forms';
import { StateObject } from '../main/StateObject';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



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
    this.supplierService.getSuppliersWeb().subscribe(s => { this.suppliers = s._embedded.suppliers;


      this.state++;
      this.populateChartData(this.page);

    });
  }


  getCategories(){
    this.categoryService.getCategoriesWeb().subscribe(c => {this.categories = c._embedded.categories;


      this.state++;
      this.populateChartData(this.page);
    });

  }

  getProducts(){
    this.productService.getProductsWeb(this.page).subscribe(p => {this.products = p._embedded.products;
      

      this.state++;
      this.populateChartData(this.page);

    });

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

      }
  }

  getID(selectedRow: number): number{

    var hrefWanted = this.products[selectedRow - 1]._links.self.href;
    var newString = hrefWanted.toString();
    var array = newString.split("http://localhost:8080/products/");
    var output = parseInt(array[1]);
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
    // this.ngOnInit();

    this.deleted = true;

  }



  deleted: boolean = false;



 //POSTING SUBSYS
  putForm = new FormGroup({
    salePrice: new FormControl(''),
    supplier: new FormControl(''),
    availability: new FormControl(''),
    category: new FormControl(''),
    fullPrice: new FormControl(''),
    productName: new FormControl('')
  });


  chosenRow: Product;

  putCondition = new StateObject()


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


    this.putCondition.beginState.productName = this.chosenRow.productName.valueOf();
    this.putCondition.beginState.fullPrice = this.chosenRow.fullPrice;
    this.putCondition.beginState.salePrice = this.chosenRow.salePrice;
    this.putCondition.beginState.category = this.chosenRow.category;
    this.putCondition.beginState.supplier = this.chosenRow.supplier;
    this.putCondition.beginState.availability = this.chosenRow.availability;

    this.initializePutState();

  }


  headerSelect1: boolean = true;
  headerSelect2: boolean = false;
  headerSelect3: boolean = false;
  headerSelect4: boolean = false;
  headerSelect5: boolean = false;

  order: string = "asc";


  clicked2: number = -1;
  clicked3: number = -1;
  clicked4: number = -1;
  clicked5: number = -1;


  sortByID(){
    this.productService.sort1D = "";
    this.page = 1;
    this.headerSelect1 = true;
    this.headerSelect2 = false;
    this.headerSelect3 = false;
    this.headerSelect4 = false;
    this.headerSelect5 = false;

    this.clicked2 = -1;
    this.clicked3 = -1;
    this.clicked4 = -1;
    this.clicked5 = -1;

    this.ngOnInit();
  }

  sortByProdName(){
    this.page = 1;
    this.headerSelect1 = false;
    this.headerSelect2 = true;
    this.headerSelect3 = false;
    this.headerSelect4 = false;
    this.headerSelect5 = false;

    if(this.clicked2 == -1){
      this.order = "asc";
    }else{
      this.order = "desc";
    }

    this.productService.sort1D = "productName,"+this.order;

    this.clicked2 = this.clicked2 * -1;
    this.clicked3 = -1;
    this.clicked4 = -1;
    this.clicked5 = -1;

    this.ngOnInit();
  }

  sortByCategory(){
    this.page = 1;
    this.headerSelect3 = false;
    this.headerSelect2 = false;
    this.headerSelect3 = true;
    this.headerSelect4 = false;
    this.headerSelect5 = false;

    if(this.clicked3 < 0){
      this.order = "asc";
    }else{
      this.order = "desc";
    }

    this.productService.sort1D = "category,"+this.order;

    this.clicked2 = -1;
    this.clicked3 = this.clicked3 * -1;
    this.clicked4 = -1;
    this.clicked5 = -1;

    this.ngOnInit();
  }

  sortBySupplier(){
    this.page = 1;
    this.headerSelect1 = false;
    this.headerSelect2 = false;
    this.headerSelect3 = false;
    this.headerSelect4 = true;
    this.headerSelect5 = false;

    if(this.clicked4 < 0){
      this.order = "asc";
    }else{
      this.order = "desc";
    }

    this.productService.sort1D = "supplier,"+this.order;

    this.clicked2 = -1;
    this.clicked3 = -1;
    this.clicked4 = this.clicked4 * -1;
    this.clicked5 = -1;

    this.ngOnInit();
  }

  sortBySalePrice(){
    this.page = 1;
    this.headerSelect1 = false;
    this.headerSelect2 = false;
    this.headerSelect3 = false;
    this.headerSelect4 = false;
    this.headerSelect5 = true;

    if(this.clicked5 < 0){
      this.order = "asc";
    }else{
      this.order = "desc";
    }

    this.productService.sort1D = "salePrice,"+this.order;

    this.clicked2 = -1;
    this.clicked3 = -1;
    this.clicked4 = -1;
    this.clicked5 = this.clicked5 * -1;

    this.ngOnInit();
  }



  
  putChanges(){
    let dataFromForm = this.putForm.value
    let dataJson = JSON.stringify(dataFromForm);
    this.productService.updateRecord(this.putId, dataJson);
    this.show = false;
  }


  show: boolean = false;

  ngOnInit() {



      this.deleted = false;


      this.initializePutState();

      this.show = false;
      
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
