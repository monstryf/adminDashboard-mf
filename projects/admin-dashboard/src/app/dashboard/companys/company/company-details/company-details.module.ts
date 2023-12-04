import { NgModule } from '@angular/core';
import { CompanyDetailsComponent } from './company-details.component';
import { CommonModule } from '@angular/common';
import { CompanyDetailsRoutingModule } from './company-details-routing.module';
import { SharedModule } from 'projects/shell-mf/src/app/shared/shared.module';

@NgModule({
  declarations: [CompanyDetailsComponent],
  imports: [CommonModule, CompanyDetailsRoutingModule, SharedModule],
  providers: [],
})
export class CompanyDetailsModule {}
