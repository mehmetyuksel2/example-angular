import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../product.repository';//ürünleri çekiyoruz

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products = products;//product.repository den products leri çekiyoruz
  constructor(private router: Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    //route params
    // this.route.paramMap.subscribe(params => {let id = params.get('id')});
    // let id = this.route.snapshot.paramMap.get('id');

    //query params

    this.route.queryParamMap.subscribe(params => {
      console.log(params);
    })//asenkron veri çeker sayfa yüklenirken hepsini çeker ve ihtiyaç halinde kullanır Observable

    let page = this.route.snapshot.queryParamMap.get('page');//asenkron olmayan veri cekme
    //sayfa yüklenirken çeker yüklendikten sonra çekmez
    console.log(page)


  }

  loadProducts(){
    this.router.navigate(['products'],{
      queryParams:{
        page:1
      }
    })//url yi query parametresi ile yönlendiriyoruz
  }
}
