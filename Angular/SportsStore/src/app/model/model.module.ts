import { NgModule } from "@angular/core";
import { ProductRespository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRespository, StaticDataSource]
})

export class ModelModule {}