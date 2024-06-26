import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { TvComponent } from './products/tv/tv.component';
import { WmComponent } from './products/wm/wm.component';
import { ParentComponent } from './parent/parent.component';

const appRoutes:Routes=[
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'products'  , children:[
    {path:'', component: ProductsComponent},
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent},
    {path:'tv', component: TvComponent},
    {path:'wm', component: WmComponent}
  ]},
  {path: 'parent'  , children:[
    {path:'', component: ParentComponent},
    {path:'laptop', component: LaptopComponent},
    {path:'mobile', component: MobileComponent},
    {path:'tv', component: TvComponent},
    {path:'wm', component: WmComponent}
  ]},
  {path: 'contact' , component: ContactComponent},
  {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    WmComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
