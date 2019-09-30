import { DisplayObject } from '../main/DisplayObject';
import { Category } from '../main/Category';
import { Product } from '../main/Product';
import { Supplier } from '../main/Supplier';


export class DisplayArray{


    


    //Parameters
    mainArray: DisplayObject[];


    //No Arg
    constructor(){}

    //Methods
    populateList(recordNumber: number, catArray: Category[], supArray: Supplier[], prodArray: Product[]): void{
        var tempArray: DisplayObject[];
        var record1 = new DisplayObject();
        var record2 = new DisplayObject();
        var record3 = new DisplayObject();
        var record4 = new DisplayObject();
        var record5 = new DisplayObject();
        var record6 = new DisplayObject();
        var record7 = new DisplayObject();
        var record8 = new DisplayObject();

        var v1 = (((recordNumber - 1) * 8));
        var v2 = (((recordNumber - 1) * 8) + 1);
        var v3 = (((recordNumber - 1) * 8) + 2);
        var v4 = (((recordNumber - 1) * 8) + 3);
        var v5 = (((recordNumber - 1) * 8) + 4);
        var v6 = (((recordNumber - 1) * 8) + 5);
        var v7 = (((recordNumber - 1) * 8) + 6);
        var v8 = (((recordNumber - 1) * 8) + 7);

        record1.setId(v1 + 1);
        record1.setProductName(prodArray[v1].productName);
        record1.setSalePrice(prodArray[v1].salePrice);
        record1.setCategory(this.getCategoryName(prodArray[v1].category, catArray));
        record1.setSupplier(this.getSupplierName(prodArray[v1].supplier, supArray));
        tempArray[0] = record1;

        record2.setId(v2 + 1);
        record2.setProductName(prodArray[v2].productName);
        record2.setSalePrice(prodArray[v2].salePrice);
        record2.setCategory(this.getCategoryName(prodArray[v2].category, catArray));
        record2.setSupplier(this.getSupplierName(prodArray[v2].supplier, supArray));
        tempArray[v2] = record2;

        record3.setId(v3 + 1);
        record3.setProductName(prodArray[v3].productName);
        record3.setSalePrice(prodArray[v3].salePrice);
        record3.setCategory(this.getCategoryName(prodArray[v3].category, catArray));
        record3.setSupplier(this.getSupplierName(prodArray[v3].supplier, supArray));
        tempArray[v3] = record3;

        record4.setId(v4 + 1);
        record4.setProductName(prodArray[v4].productName);
        record4.setSalePrice(prodArray[v4].salePrice);
        record4.setCategory(this.getCategoryName(prodArray[v4].category, catArray));
        record4.setSupplier(this.getSupplierName(prodArray[v4].supplier, supArray));
        tempArray[v4] = record4;

        record5.setId(v5 + 1);
        record5.setProductName(prodArray[v5].productName);
        record5.setSalePrice(prodArray[v5].salePrice);
        record5.setCategory(this.getCategoryName(prodArray[v5].category, catArray));
        record5.setSupplier(this.getSupplierName(prodArray[v5].supplier, supArray));
        tempArray[v5] = record5;

        record6.setId(v6 + 1);
        record6.setProductName(prodArray[v6].productName);
        record6.setSalePrice(prodArray[v6].salePrice);
        record6.setCategory(this.getCategoryName(prodArray[v6].category, catArray));
        record6.setSupplier(this.getSupplierName(prodArray[v6].supplier, supArray));
        tempArray[v6] = record6;

        record7.setId(v7 + 1);
        record7.setProductName(prodArray[v7].productName);
        record7.setSalePrice(prodArray[v7].salePrice);
        record7.setCategory(this.getCategoryName(prodArray[v7].category, catArray));
        record7.setSupplier(this.getSupplierName(prodArray[v7].supplier, supArray));
        tempArray[v7] = record7;

        record8.setId(v8 + 1);
        record8.setProductName(prodArray[v8].productName);
        record8.setSalePrice(prodArray[v8].salePrice);
        record8.setCategory(this.getCategoryName(prodArray[v8].category, catArray));
        record8.setSupplier(this.getSupplierName(prodArray[v8].supplier, supArray));
        tempArray[v8] = record8;

        this.mainArray = tempArray;
    }

    //Figures out which supplier name corresponds to the supplier number in the product table
    getSupplierName(sup_id_target: number, supArray: Supplier[]): String{
        var name = supArray[sup_id_target - 1].supplierName;
        return name;
    }
    
    //Figures out which category name corresponds to the category number in the product table
    getCategoryName(cat_id_target: number, catArray: Category[]): String{
        var name = catArray[cat_id_target - 1].categoryName;
        return name;
    }



    //Getter
    getMainArray(): DisplayObject[]{
        return this.mainArray;
    }

    //Setter
    setMainArray(input: DisplayObject[]): void{
        this.mainArray = input;
    }



}