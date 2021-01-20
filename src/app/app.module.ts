import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { ProveedorComponent } from './proveedor/proveedor.component';

import { AlmacenComponent } from './almacen/almacen.component';
import { UbicacionComponent } from './almacen/ubicacion/ubicacion.component';
import { ProductosComponent } from './page/productos/productos.component';
import { PageComponent } from './page/page.component';
import { PageModule } from './page/page.module';

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    AlmacenComponent,
    UbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
