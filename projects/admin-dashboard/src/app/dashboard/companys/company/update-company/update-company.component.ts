import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'projects/shell-mf/src/app/shared/router/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css'],
})
export class UpdateCompanyComponent implements OnInit {
  public route = routes;
  public companyId: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.companyId = this.router.snapshot.paramMap.get('id');
  }
}
