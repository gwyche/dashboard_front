export class Category{

    //Parameters
    categoryId: number;
    categoryName: String;

    constructor(){}

    getCategoryId(): number{
        return this.categoryId;
    }

    getCategoryName(): String{
        return this.categoryName;
    }

    setCategoryId(input: number): void{
        this.categoryId = input;
    }

    setCategoryName(input: String): void{
        this.categoryName = input;
    }


}