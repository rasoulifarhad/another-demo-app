import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../product';
import { Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnChanges {

  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Input() id = -1;
  product$: Observable<Product> | undefined;

  constructor(
    private productsService: ProductsService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
    );

  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if(!product.isFirstChange()) {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
    this.product$  = this.productsService.getProduct(this.id);
  }

  buy() {
    this.bought.emit();
  }

  changePrice(product: Product, price: number) {
    this.productsService.updateProduct(product.id, price).subscribe(
      () => {alert(`The price of ${product.name} was changed!`);}
    );
  }

  remove(product: Product) {
    this.productsService.deleteProduct(product.id).subscribe(
      () => {this.deleted.emit();}
    );
  }
}
