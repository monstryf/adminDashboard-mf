import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateCompanyComponent } from './update-company.component';
import { CompanyListRoutingModule } from '../company-list/company-list-routing.module';
import { SharedModule } from 'projects/shell-mf/src/app/shared/shared.module';

@NgModule({
  declarations: [UpdateCompanyComponent],
  imports: [CommonModule, CompanyListRoutingModule, SharedModule],
})
export class UpdateCompanyModule {}
