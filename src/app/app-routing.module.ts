
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", pathMatch:"full", component:HomeComponent},
  {path : "products", component:ProductsComponent},
  {path : "gestion", component:GestionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
