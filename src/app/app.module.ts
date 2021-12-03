import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductService } from './product.service';
import { ProductTrackingComponent } from './product-tracking/product-tracking.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductService,
    ProductTrackingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
