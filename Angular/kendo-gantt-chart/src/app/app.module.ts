import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GanttModule } from '@progress/kendo-angular-gantt';
import { KendoGanttModule } from 'konciv-kendo-gantt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    ButtonModule,
    GanttModule,
    KendoGanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
