export class PostObject{

    body = {
        productName: "Test Product 6",
        category: 1,
        fullPrice: 1,
        salePrice: 1,
        availability: false,
        supplier: 1,
        // _links: {
        //     self: {
        //         href: "http://localhost:8080/products/689"
        //     },
        //     product: {
        //         href: "http://localhost:8080/products/689"
        //     }
        // }
    }

    constructor(name: string, cat: number, fp: number, sp: number, av: boolean, sup: number){
        this.body.productName = name;
        this.body.category = cat;
        this.body.fullPrice = fp;
        this.body.salePrice = sp;
        this.body.availability = av;
        this.body.supplier = sup;
        // this.body._links.self.href = "";
        // this.body._links.product.href = "";
    }

}