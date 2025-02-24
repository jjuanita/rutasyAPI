import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contacto',
        component:ContactoComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'productos',
        component:ProductosComponent
    },
    {
        path:'categorias',
        component:CategoriasComponent
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
