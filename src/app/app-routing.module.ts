import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ProductPageComponent } from './shared/product-page/product-page.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';
import { CartComponent } from './shared/cart/cart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product-page/:name',component:ProductPageComponent},
  {path:'product-detail/:name/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
