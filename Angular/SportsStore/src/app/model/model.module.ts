import { NgModule } from "@angular/core";
import { ProductRespository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
    providers: [ProductRespository, StaticDataSource, Cart]
})

export class ModelModule {}