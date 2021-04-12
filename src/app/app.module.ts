import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanSummaryComponent } from './loan-summary/loan-summary.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { AmortizationScheduleComponent } from './amortization-schedule/amortization-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanSummaryComponent,
    LoanListComponent,
    AmortizationScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
