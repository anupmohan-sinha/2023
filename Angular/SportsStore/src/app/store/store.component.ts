import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/cart.model";
import { Product } from "../model/product.model";
import { ProductRespository } from "../model/product.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})

export class StoreComponent {
    selectedCategory: string | undefined | null = null;
    productsPerPage = 4;
    selectedPage = 1;

    constructor(private repository: ProductRespository,
        private cart: Cart,
        private router: Router) {}

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
        .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): (string | undefined)[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePerSize(event: Event) {
        let newSize =  (event.target as HTMLInputElement).value;
        console.log('newSize ',newSize);
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

/*     get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0).map((x,i) => i + 1);
    } */

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}