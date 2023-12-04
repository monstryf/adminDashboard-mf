import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyListRoutingModule } from './company-list-routing.module';
import { SharedModule } from 'projects/shell-mf/src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [CommonModule, FormsModule, CompanyListRoutingModule, SharedModule],
  exports: [],
})
export class CompanyListModule {}
