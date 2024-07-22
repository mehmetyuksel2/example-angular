import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductComponent } from '../product.component';
import { ProductRepository } from '../repository.mode';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css'
})
export class AdminProductComponent {

  products: Product[] = [];
  model:  ProductRepository = new ProductRepository;
  selectedProduct: string | undefined;

  

  constructor(){
    this.products = this.model.getProducts();
    this.selectedProduct= undefined;
  }
  getSelected(product:Product): boolean{
    return product.name == this.selectedProduct;
  }

  textSelected(event:Event){//inputtan gelen eventi metod içerisine atar
    const inputElement = event?.target as HTMLInputElement;//eventin htmlinputelement olduğunu belirtiriz
    this.selectedProduct = inputElement.value;//selectedproduct a aktarırız
  }

}
