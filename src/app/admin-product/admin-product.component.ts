import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductComponent } from '../product.component';
import { ProductRepository } from '../repository.mode';
import { state } from '@angular/animations';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  products: Product[] = [];
  model:  ProductRepository = new ProductRepository;
  selectedProduct: Product = new Product;
  selected!: boolean;

  

  constructor(){
    this.products = this.model.getProducts();
  }
  getSelected(product:Product): boolean{
    return product == this.selectedProduct;
  }

  textSelected(event:Event){//inputtan gelen eventi metod içerisine atar
    const inputElement = event?.target as HTMLInputElement;//eventin htmlinputelement olduğunu belirtiriz
    //this.selectedProduct = inputElement.value;//selectedproduct a aktarırız
  }

  editProduct(product : Product){
    this.selectedProduct = product;
    console.log(this.selectedProduct);
    this.selected = true;
    
  }
  saveChanges(){
    const p = this.model.getProductsById(this.selectedProduct.id!);
    p.name = this.selectedProduct.name;
    p.price = this.selectedProduct.price;
    p.description = this.selectedProduct.description;
    p.imageUrl = this.selectedProduct.imageUrl;
    this.selected = false;
  }
  newProduct: Product = new Product;
  get jsonProduct(){//bu metodu her hangibir objeyi json formatında getirir. bir özellik gibi kullanılır
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product){
    console.log("new product:"+ this.jsonProduct);//eklenen ürünün json uzantılı hali yazdırılır
    //detaylı incele
  }
  log(x:any){
    console.log(x);
  }
  getValidationErrors(state: any): any[] {
    let ctrlName: string = state.name;//ng modelden name parametresini çektik
    let messages: string[] = [];
    if(state.errors){
      for(let errorName in state.errors){//ngmodeldeki errorsları listeledik ve errorname atadık
        switch(errorName){//error ismine göre mesaj dizisine değer atadık
          case "required": 
            messages.push(`you must enter a ${ctrlName}`);break;
            case "minlength": 
              messages.push(`min. 3 characters ${ctrlName}`);break;
            
            case "pattern": 
            messages.push(`you must enter a ${ctrlName}`);break;
              
            case "pattern": 
            messages.push(`${ctrlName} contains illegal characters`);break;
          

        }
      }
    }
    return messages;
  }


  

}
