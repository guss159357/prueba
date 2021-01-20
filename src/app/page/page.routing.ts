import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ProductosComponent } from './productos/productos.component';


const pagesRoutes: Routes = [
  { path: 'pages', component: PageComponent },
  { path: 'productos', component: ProductosComponent },
];


export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
