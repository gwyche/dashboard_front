export class Product{

    //Parameters
    id: number;
    product_name: String;
    fullPrice: number;
    salePrice: number;
    availability: boolean;
    category: number;
    supplier: number;
    catName: String;
    supName: String;

    //No arg
    constructor(){}

    //Getters/Setters
    getID(){
        return this.id;
    }

    setID(input: number){
        this.id = input;
    }

    getCatName(): String{
        return this.catName;
    }
    getSupName(): String{
        return this.supName;
    }

    setCatName(input: String): void{
        this.catName = input;
    }

    setSupName(input: String): void{
        this.supName = input;
    }

    getProductName(): String{
        return this.product_name;
    }

    getFullPrice(): number{
        return this.fullPrice;
    }

    getSalePrice(): number{
        return this.salePrice;
    }

    getAvailability(): boolean{
        return this.availability;
    }

    getCategory(): number{
        return this.category;
    }

    getSupplier(): number{
        return this.supplier;
    }
    //
    setCategory(input: number): void{
        this.category = input;
    }

    setSupplier(input: number): void{
        this.supplier = input;
    }


    setProductName(input: String): void{
        this.product_name = input;
    }

    setFullPrice(input: number): void{
        this.fullPrice = input;
    }

    setSalePrice(input: number): void{
        this.salePrice = input;
    }

    setAvailability(input: boolean): void{
        this.availability = input;
    }


    








}