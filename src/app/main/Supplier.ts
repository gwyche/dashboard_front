export class Supplier{

    //Parameters
    supplierId: number;
    supplierName: String;

    constructor(){}

    getSupplierId(): number{
        return this.supplierId;
    }

    getSupplierName(): String{
        return this.supplierName;
    }

    setSupplierId(input: number): void{
        this.supplierId = input;
    }

    setSupplierName(input: String): void{
        this.supplierName = input;
    }

}