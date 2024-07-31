import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule88child } from './productdetail/app-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './summary.pipe';
import { InputMailDirective } from './input-mail.directive';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { PostComponent } from './post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './routeproducts/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputMailDirective,
    AdminProductComponent,
    PostComponent,
    RoutingComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    ProductdetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule88child
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
