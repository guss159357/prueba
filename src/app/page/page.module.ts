import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ProductosComponent } from './productos/productos.component';
import { PAGES_ROUTES } from './page.routing';



@NgModule({
  declarations: [
    PageComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
  ]
})
export class PageModule { }
