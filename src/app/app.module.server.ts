import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [ProductComponent],
})
export class AppServerModule {}
