import { Component } from '@angular/core';
import { Company } from '../../model/company';
import { map } from 'rxjs';
import { TranslatesService } from 'projects/shell-mf/src/app/shared/translate/translate.service';
import { MicroServicesApiService } from '../../../service/micro-services-api/micro-services-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
})
export class CompanyDetailsComponent {
  public company: Company = new Company();
  public companyId: any;
  private tempData!: any[];
  constructor(
    public translate: TranslatesService,
    private apiService: MicroServicesApiService,
    private route: ActivatedRoute
  ) {}
  filterUpdate(event: any) {
    const val = event.target.value.toLowerCase();
    // this.loading = false;
    const temp = this.tempData.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // this.paging.data = temp;
  }
  /**
   * Get Company By Id
   * @param id
   */
  getCompanyById(id: number) {
    this.apiService
      .getById('company', 'get_company_by_id', id)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
      .subscribe({
        next: (response) => {
          this.company = response;
          console.log(this.company);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.companyId = this.route.snapshot.paramMap.get('id');
    this.getCompanyById(this.companyId);
  }
}
