import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module'
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { CardComponent,Card } from './card/card.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { StockStashNavComponent } from './stock-stash-nav/stock-stash-nav.component';
import { AppHttpInterceptor } from './http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {enableProdMode} from '@angular/core';
import { AuthService } from './AuthService';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AddStockComponent,
    CardComponent,
    MyAccountComponent,
    StockStashNavComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AppHttpInterceptor,
    //   multi:true
    // }
    AuthService
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule {
  
 }
