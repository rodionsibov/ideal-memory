import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserListModule } from './user-list/user-list.module';
import { FooterComponent } from './footer/footer.component';
import { RouteModule } from './route/route.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { StoreInfoService } from './store-info.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomeComponent,
    HeaderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserListModule,
    RouteModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [StoreInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
