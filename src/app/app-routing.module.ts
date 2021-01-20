import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductosComponent } from './page/productos/productos.component';
import { PageComponent } from './page/page.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { UbicacionComponent } from './almacen/ubicacion/ubicacion.component';

const routes: Routes = [
  { path: 'proveedores', component: ProveedorComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: 'almacen', component: AlmacenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
