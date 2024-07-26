import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductComponent } from '../product.component';
import { ProductRepository } from '../repository.mode';
import { state } from '@angular/animations';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { GroupByOptionsWithElement } from 'rxjs';
import { ImageValidator } from './imagevalidators';

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
ders68_name: any;
ders68_description: any;

  

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
  getValidationErrors(state: any, k? :string): any[] {
    let ctrlName: string = k!;//ng modelden name parametresini çektik
    let messages: string[] = [];
    if(state.errors){
      for(let errorName in state.errors){//ngmodeldeki errorsları listeledik ve errorname atadık
        switch(errorName){//error ismine göre mesaj dizisine değer atadık
          case "required": 
            messages.push(`you must enter a ${ctrlName}`);break;
          case "minlength": 
            messages.push(`min. 3 characters ${ctrlName}`);break;
          case "pattern": 
            messages.push(`${ctrlName} contains illegal characters`);break;
          

        }
      }
    }
    return messages;
  }
  
  getFormValidationErrors(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k=>{
      console.log(k);
      console.log(form.controls[k]);
      this.getValidationErrors(form.controls[k],k)//ngcontolden gönderildiğinde controlün ismi çekilebilirdi
      //ancak ngform ile çektiğimiz için controlün ismini çekemiyoruz burada ikinci parametreyi o yüzden gönderdik
      .forEach(message => messages.push(message));
        
      });
    return messages;
  }
  formSubmited: boolean=false;
  SubmitForm(form: NgForm){
    this.formSubmited = true;
    console.log(form)
    if(form.valid){
      this.addProduct(this.newProduct);
      this.newProduct = new Product;
      form.reset();
      this.formSubmited=false;

    }
  }

    ders69_productForm = new FormGroup({
      ders68_name : new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      //Validators angular.io sitesinde propertylere ulaşabiliriz.
      ders68_description : new FormControl('',Validators.required),
      ders68_price : new FormControl('',Validators.required),
      ders68_imageUrl : new FormControl('', [
        Validators.required,
        ImageValidator.IsValidExtension
      ])//form üzerindeki inputların formcontrolName baz alınarak burada şartlar tanımlanır
    })
  onSubmit(){
    console.log(this.ders69_productForm.value);
  }
  updateProduct(){
    this.ders69_productForm.patchValue({// patchvalue belirli alanları güncelleme
      ders68_name: 'iphone x',
      ders68_price: '5000'
    });
  }

  get ders70_name(){

    return this.ders69_productForm.get('ders68_name')
  }
  get ders72_Image(){

    return this.ders69_productForm.get('ders68_imageUrl')
  }

}
