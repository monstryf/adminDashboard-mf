import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule, DashboardRoutingModule],
  exports: [],
})
export class DashboardModule {}
