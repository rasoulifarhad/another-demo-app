import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from "./products/products.module";
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { AuthModule } from "./auth/auth.module";
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
    declarations: [
        AppComponent,
        CopyrightDirective,
        NumericDirective,
        PermissionDirective,
        KeyLoggerComponent,
        PageNotFoundComponent,
        CartComponent,
        CrisisListComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ProductsModule,
        AuthModule,
        HeroesModule,
        HttpClientModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
