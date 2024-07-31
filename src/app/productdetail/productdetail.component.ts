import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product.repository';

@Component({
  selector: 'productdetail',
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute){}
  selectedProduct: any;
  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.selectedProduct = products.find(i=>i.id===Number(id));

    this.route.paramMap.subscribe(params =>{ 
      let id = params.get('id');
      this.selectedProduct = products.find(i=>i.id===Number(id))
      ;})//route daki id ye göre products objesi filtreleniyor ve çıkan sonuç selectedproduct a aktarılıyor
  }

}
