import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./routeproducts/products.component";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { LoginComponent } from "./login/login.component";



const appRoutes: Routes =[
    {path:'', component: HomeComponent},//localhost:4200 
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'products', component: ProductsComponent, children:[//*** */
      {path:':id', component: ProductdetailComponent},
      {path:':id/edit', component: ProductEditComponent}
    ]},//****verilen children parametresi, products componentin içerisinde yeni bir component getirir
    {path:'users', component: UsersComponent, children:[
      {path:':name', component: UserComponent}
    ]},
    {path:'**', component: NotfoundComponent}
  ];
  
  
@NgModule({
    imports: [
        
        RouterModule.forRoot(appRoutes)//yukarıda belirttiğimiz endpointlerin obje değişkeni
    ],
    exports:[RouterModule]
})

export class AppRoutingModule88child{
    
}