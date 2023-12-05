import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslatesService } from 'projects/shell-mf/src/app/shared/translate/translate.service';
import { Paging } from '../../model/paging';
import { map } from 'rxjs';
import { MicroServicesApiService } from '../../../service/micro-services-api/micro-services-api.service';
import { TablePageEvent } from 'primeng/table';
import { Company } from '../../model/company';
import { routes } from 'projects/shell-mf/src/app/shared/router/router';

@Component({
  selector: 'admin-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  public paging: Paging = new Paging();
  public selectedCompany: any;
  public route = routes;
  constructor(
    public translate: TranslatesService,
    private apiService: MicroServicesApiService
  ) {}
  private tempData!: any[];
  filterUpdate(event: any) {
    const val = event.target.value.toLowerCase();
    // this.loading = false;
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.paging.data = temp;
  }
  /**
   * Change Table Page
   *
   * @param event
   */
  onPageChange(event: TablePageEvent) {
    var page = event.first / event.rows;
    this.apiService
      .getByPaging('company', 'get_all_company_by_paging', page + 1, event.rows)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
      .subscribe({
        next: (response) => {
          this.paging = response;
          this.tempData = this.paging.data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  getCompany() {
    this.apiService
      .getByPaging('company', 'get_all_company_by_paging', 1, 5)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
      .subscribe({
        next: (response) => {
          this.paging = response.company;
          this.tempData = this.paging.data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.home = { icon: 'pi pi-home', routerLink: '/' };
    this.getCompany();
  }
}
