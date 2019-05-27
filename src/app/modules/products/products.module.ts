  import { NgModule } from '@angular/core';
  import { CommonModule, formatNumber } from '@angular/common';
  import { ListProductsComponent } from './components/list-products/list-products.component';
  import { ListProductsService } from './services/list-products.service';

  @NgModule({
    declarations: [
      ListProductsComponent
    ],
    imports: [
      CommonModule
    ],
    providers: [
      ListProductsService
    ],
    exports: [
      CommonModule,
      ListProductsComponent
    ]
  })
  export class ProductsModule { }
