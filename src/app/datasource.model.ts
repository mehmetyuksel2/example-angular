import { Product } from "./product.model";



export class SimpleDataSource{

    private product : Product[];

    constructor(){
        this.product = new Array<Product>(
            new Product(1,"Samsung s5","iyi telefon","https://i.pinimg.com/236x/08/fa/7b/08fa7baea8c0da8786c536f2dc7d4aec.jpg",1000),
            new Product(2,"Samsung s6","iyi telefon","https://i.pinimg.com/236x/dd/63/e1/dd63e1b3f06f5cfccef1a671cd134b48.jpg",2000),
            new Product(3,"Samsung s7","iyi telefon","https://s3.cloud.ngn.com.tr/kitantik/images/2020-05-05/0z8kgltk9slrxe51osm.jpg",3000),
            new Product(4,"Samsung s8","iyi telefon","https://matbaamarketi.com/images/detailed/34/VR-1008.jpg",4000),
            new Product(5,"Samsung s9","iyi telefon","https://www.technopat.net/sosyal/eklenti/passengers-afis-jpg.231719/",5000)
        );
    }
    getProducts(): Product[]{
        return this.product;
    }
}