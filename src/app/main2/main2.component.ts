import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Supplier } from '../main/Supplier';
import { SupplierStateObject } from '../main2/SupplierStateObject';

@Component({
  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.css']
})
export class Main2Component implements OnInit {

  suppliers1: Object;


  suppliers: any;


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

      this.state++;
      this.populateChartData(this.page);

    });
  }





  populateChartData(page: number){
      if(this.state >= 1){

      this.suppliers[0].supplierName = this.suppliers[0].supplierName ;
      this.suppliers[0].supplierId = this.getID(1);
      this.row1 = this.suppliers[0];


      this.suppliers[1].supplierName = this.suppliers[1].supplierName ;
      this.suppliers[1].supplierId = this.getID(2);
      this.row2 = this.suppliers[1];


      this.suppliers[2].supplierName = this.suppliers[2].supplierName ;
      this.suppliers[2].supplierId = this.getID(3);
      this.row3 = this.suppliers[2];


      this.suppliers[3].supplierName = this.suppliers[3].supplierName ;
      this.suppliers[3].supplierId = this.getID(4);
      this.row4 = this.suppliers[3];


      this.suppliers[4].supplierName = this.suppliers[4].supplierName ;
      this.suppliers[4].supplierId= this.getID(5);
      this.row5 = this.suppliers[4];


      this.suppliers[5].supplierName = this.suppliers[5].supplierName ;
      this.suppliers[5].supplierId = this.getID(6);
      this.row6 = this.suppliers[5];
      

      this.suppliers[6].supplierName = this.suppliers[6].supplierName ;
      this.suppliers[6].supplierId = this.getID(7);
      this.row7 = this.suppliers[6];
      
  
      this.suppliers[7].supplierName = this.suppliers[7].supplierName ;
      this.suppliers[7].supplierId = this.getID(8);
      this.row8 = this.suppliers[7];
      }else{

      }
  }

  getID(selectedRow: number): number{

    var hrefWanted = this.suppliers[selectedRow - 1]._links.self.href;
    var newString = hrefWanted.toString();
    var array = newString.split("http://localhost:8080/suppliers/");
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
    this.supplierService.dropDBRecord(id);
    this.ngOnInit();
  }

 //POSTING SUBSYS
  putForm = new FormGroup({
    supplierName: new FormControl(''),
    supplierId: new FormControl('')
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



    this.putCondition.beginState.supplierId = this.chosenRow.supplierId;
    this.putCondition.beginState.supplierName = this.chosenRow.supplierName.valueOf();


    this.initializePutState();

  }





  
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

  }



}
