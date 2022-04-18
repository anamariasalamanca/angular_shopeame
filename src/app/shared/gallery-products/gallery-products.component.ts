
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-products',
  templateUrl: './gallery-products.component.html',
  styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnInit {
  @Input() products! :any
  

  constructor() { }

  ngOnInit(): void {
    
    }
    
  }


