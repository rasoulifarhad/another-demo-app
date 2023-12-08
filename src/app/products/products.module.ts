import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHostDirective } from './product-host.directive';
import { SortPipe } from './sort.pipe';
import { ProductViewComponent } from './product-view/product-view.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductHostDirective,
    SortPipe,
    ProductViewComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
