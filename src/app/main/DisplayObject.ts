export class DisplayObject{

    id: number;
    productName: String;
    category: String;
    supplier: String;
    sale_price: number;

    //No Arg
    constructor(){}

        //Setters
        setId(input: number): void{
            this.id = input;
        }

        setProductName(input: String): void{
            this.productName = input;
        }

        setCategory(input: String): void{
            this.category = input;
        }

        setSupplier(input: String): void{
            this.supplier = input;
        }

        setSalePrice(input: number): void{
            this.sale_price = input;
        }

        //Getters
        getId(): number{
            return this.id;
        }

        getProductName(): String{
            return this.productName;
        }

        getCategory(): String{
            return this.category;
        }

        getSupplier(): String{
            return this.supplier;
        }

        getSalePrice(): number{
            return this.sale_price;
        }




    





}