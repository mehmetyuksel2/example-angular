import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SummaryPipe } from './summary.pipe';
import { InputMailDirective } from './input-mail.directive';
import { AdminProductComponent } from './admin-product/admin-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe,
    InputMailDirective,
    AdminProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [ProductComponent]
})
export class AppModule { }
