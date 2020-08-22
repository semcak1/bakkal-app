import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { BakiyeComponent } from './menu/bakiye/bakiye.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { FormComponent } from './menu/bakiye/form/form.component';
import { BudgetItemListComponent } from './menu/bakiye/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './menu/bakiye/budget-item-list/budget-item-card/budget-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BakiyeComponent,
    DashboardComponent,
    FormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
