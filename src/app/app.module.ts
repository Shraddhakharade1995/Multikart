// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CustPipe } from './common/cust.pipe';
import { CustomDirective } from './common/custom.directive';
// import { SidebarComponent } from 'Multikart/src/app/products/sidebar/sidebar.component';
import { CommoncompComponent } from './commoncomp/commoncomp.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GalleriaModule } from 'primeng/galleria';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CustPipe,
    CustomDirective,
    SidebarComponent,
    CommoncompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GalleriaModule


  ],
  // schemas:[
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
