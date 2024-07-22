import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

//PROJE İÇERİSİNDEKİ DATALARI İŞLEMEK İÇİN REPOSİTORY DOSYASI

export class ProductRepository{
    private dataSource : SimpleDataSource;

    private products: Product[];


    constructor(){
        this.dataSource=new SimpleDataSource();//boş bir sınıf nesnesi tanımlıyoruz
        this.products = new Array<Product>();//boş bir product nesnesi tanımlıyoruz
        this.dataSource.getProducts().forEach(p => this.products.push(p));// datasource içindeki
        //getproducts metodunun içindeki elemanları products içine aktar
            
    };
    i : number=0;
    deleteProducts(product: Product){
        let index = this.products.indexOf(product);
        this.products.splice(index,1)
    }

       
    addProduct(product: Product){

        this.products.push(product);
    } 
    getProducts(): Product[]{
        return this.products;
    }

    getProductsById(id: number): Product{
        return this.products.find(p=>p.id == id)!;
    }

    getProductCount(): number{
        return this.products.length;
    }
}
