import { Component, OnInit } from '@angular/core';
import { ListProductsService } from '../../services/list-products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  productos = null;

  constructor(public listProductsService: ListProductsService) { }

  async ngOnInit() {
    this.productos = await this.listProductsService.obtenerProductos();
    if (this.productos !== undefined) {
      this.productos.data.map(producto => {
        producto.importclub_price = parseInt(producto.importclub_price).toLocaleString()
        producto.retail_price = parseInt(producto.retail_price).toLocaleString()
        return producto;
      });
    } else {
      this.productos.error = true;
    }

  }

}
