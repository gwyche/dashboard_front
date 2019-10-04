import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { SupplierService } from '../supplier.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Category } from '../main/Category';
import { CategoryStateObject } from '../main3/CategoryStateObject';

@Component({
  selector: 'app-main3',
  templateUrl: './main3.component.html',
  styleUrls: ['./main3.component.css']
})
export class Main3Component implements OnInit {



  //Destination for the contents of a table query response body
  categories: any;

  //Iterates as the response body from a get request to the categories database table completes
  state: number = 0;

  //Attributes that contain the attributes the HTML page uses to display the data
  row1: Category;
  row2: Category;
  row3: Category;
  row4: Category;
  row5: Category;
  row6: Category;
  row7: Category;
  row8: Category;

  //Page number passed as arguments to methods that further pass those arguments to methods in the services. Used to control pagination.
  page: number = 1;

  constructor(private productService: ProductService, private supplierService: SupplierService, private categoryService: CategoryService) { }


 //Calls the method in the CategoryService that sends a get request to the backend
  getCategories(){
    this.categoryService.getCategoriesWeb().subscribe(c => {this.categories = c._embedded.categories;


      this.state++;
      this.populateChartData(this.page);
    });

  }


  //Populates the row# attributes that store the data displayed on the HTML
  populateChartData(page: number){
      if(this.state >= 1){

      this.categories[0].categoryName = this.categories[0].categoryName ;
      this.categories[0].categoryId = this.getID(1);
      this.row1 = this.categories[0];


      this.categories[1].categoryName = this.categories[1].categoryName ;
      this.categories[1].categoryId = this.getID(2);
      this.row2 = this.categories[1];


      this.categories[2].categoryName = this.categories[2].categoryName ;
      this.categories[2].categoryId = this.getID(3);
      this.row3 = this.categories[2];


      this.categories[3].categoryName = this.categories[3].categoryName ;
      this.categories[3].categoryId = this.getID(4);
      this.row4 = this.categories[3];


      this.categories[4].categoryName = this.categories[4].categoryName ;
      this.categories[4].categoryId= this.getID(5);
      this.row5 = this.categories[4];


      this.categories[5].categoryName = this.categories[5].categoryName ;
      this.categories[5].categoryId = this.getID(6);
      this.row6 = this.categories[5];
      

      this.categories[6].categoryName = this.categories[6].categoryName ;
      this.categories[6].categoryId = this.getID(7);
      this.row7 = this.categories[6];
      

      this.categories[7].categoryName = this.categories[7].categoryName ;
      this.categories[7].categoryId = this.getID(8);
      this.row8 = this.categories[7];
      }else{

      }
  }

  //Displays the supplier primary key
  getID(selectedRow: number): number{

    var hrefWanted = this.categories[selectedRow - 1]._links.self.href;
    var newString = hrefWanted.toString();
    var array = newString.split("https://gwychedashboard.herokuapp.com/categories/");
    var output = parseInt(array[1]);

    return output;
  }

  //Pagination
  page1(){
    this.page = 1;
    this.ngOnInit();
  }

  //Pagination
  prev(){
    if(this.page != 1){
      this.page--;
      this.ngOnInit();
    }
  }

  //Pagination
  next(){
      this.page++;
      this.ngOnInit();
  }

  //Deletion
  deleteRow(row: number){
    var id = this.getID(row);
    this.categoryService.dropDBRecord(id);
    this.ngOnInit();
    this.deleted = true;
  }


  deleted: boolean = false;



  //PUTTING RELATED
  putForm = new FormGroup({

    categoryName: new FormControl(''),
    categoryId: new FormControl('')

  });


  chosenRow: Category;

  putCondition = new CategoryStateObject();


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



    this.putCondition.beginState.categoryId = this.chosenRow.categoryId;
    this.putCondition.beginState.categoryName = this.chosenRow.categoryName.valueOf();


    this.initializePutState();

  }





  
  putChanges(){
    let dataFromForm = this.putForm.value
    let dataJson = JSON.stringify(dataFromForm);
    this.categoryService.updateRecord(this.putId, dataJson);
    this.show = false;
  }


  show: boolean = false;

  ngOnInit() {

      this.deleted = false;

      var correctedPage = this.page - 1;
      var adjustedUrl: string = "https://gwychedashboard.herokuapp.com/categories?page="+correctedPage+"&size=8";
      this.categoryService.categoryUrl = adjustedUrl;

      this.initializePutState();

      this.show = false;
      
      this.state = 0;

      this.row1 = new Category();
      this.row2 = new Category();
      this.row3 = new Category();
      this.row4 = new Category();
      this.row5 = new Category();
      this.row6 = new Category();
      this.row7 = new Category();
      this.row8 = new Category();

      this.getCategories();

  }



}
