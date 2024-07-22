import { Component } from "@angular/core";
import { ProductRepository } from "./repository.mode";
import { Product } from "./product.model";
import { producerAccessed } from "@angular/core/primitives/signals";


@Component({
    selector:"app",
    templateUrl:"product.component.html",
    //template: `<input [(ngModel)]="email" (keyup.enter)="onKeyUp2()"/>`,
    styleUrls: ["product.component.css"]
})
export class ProductComponent{

    today: number = Date.now();
    title: string = "Angular Kursu";
    students: number = 21536;
    price: number = 359.4957;
    completed: number = 0.26;

    text: string="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";


    model: ProductRepository= new ProductRepository();
    disabled: boolean = false;
    productName: string = this.model?.getProductsById(1).name!;
    


    getClasses(id: number): string{
        // modelbinding class binding örnekleri common module eklemeyi unutma
        let product = this.model?.getProductsById(id);
        return (product?.price! <= 1000 ? "bg-info": "bg-secondary")+ " m-2 p-2";
        //koşula göre class döndür
    }

    getClassMap(id: number): Object{
        let product = this.model?.getProductsById(id);
        return{
            "bg-info": product?.price! <= 1000,//koşulun sağlanması durumunda bg-info ekle
            "bg-secondary": product?.price! >= 1000,//koşulun sağlanması durumunda bg-secondary ekle
            "text-center text-white" : product?.name == "Samsung s6"
            //koşulun sağlanması durumunda yazı rengini beyaz yap
        }
    }

    color: string = this.model?.getProductsById(2)?.price! <= 1000 ? "green":"red";

    getStyles(id: number){//style kod satırlarını json olarak view e gönderir

        let product = this.model?.getProductsById(id);

        return {
            fontSize : "25px",
            color: product?.price! <= 1000 ? "green":"red"
        }//birden fazla style kodu için ngStyles kullanılır
    }

    onSubmit($event: MouseEvent){
        $event.stopPropagation();//bu örnekte iki button ve çevreleyen bir div mevcut
        //buttona tıklarken aynı anda dive de tıklanmaması için bu satır yazılır
        //tıklama eventinde hepsi div ve buttonların sınırları ayrılır ve ayrı tıklanır
        console.log('button was click');
        console.log($event);
    }

    onDivClick(){
        console.log('div was click');
    }

    onKeyUp($event: KeyboardEvent){
        const inputElement = $event.target as HTMLInputElement;
        //$event.targetin bir HTMLInputElement olduğunu belirtiyoruz

        if($event.key==='Enter'){
            console.log(inputElement.value);
            //burada value değerini alıyoruz
        }
        
        
    }
    email: string = "email@gmail.com";
    onKeyUp2(email: string){
        console.log(email);
        
        
    }

    addProduct(){
        this.model.addProduct(new Product(6,"Samsung s10","iyi telefon","https://i.pinimg.com/236x/08/fa/7b/08fa7baea8c0da8786c536f2dc7d4aec.jpg",5000),)
    }

    deleteProducts(product: Product){
        this.model.deleteProducts(product)
    }

}