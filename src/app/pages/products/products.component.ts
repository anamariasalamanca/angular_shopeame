import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any
  constructor(private productsServiceService: ProductServiceService) { }

  ngOnInit(): void {
    this.productsServiceService.getProducts().subscribe((res:any)=>{
     console.log(res);
     this.products=res;
    })

  }

}