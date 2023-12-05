import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'company-list',
    component: DashboardComponent,
    loadChildren: () =>
      import('./companys/company/company-list/company-list.module').then(
        (m) => m.CompanyListModule
      ),
  },
  {
    path: 'company-details/:id',
    component: DashboardComponent,
    loadChildren: () =>
      import('./companys/company/company-details/company-details.module').then(
        (m) => m.CompanyDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
