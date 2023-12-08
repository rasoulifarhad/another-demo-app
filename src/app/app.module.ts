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

@NgModule({
    declarations: [
        AppComponent,
        CopyrightDirective,
        NumericDirective,
        PermissionDirective,
        KeyLoggerComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule,
        AuthModule
    ]
})
export class AppModule { }
