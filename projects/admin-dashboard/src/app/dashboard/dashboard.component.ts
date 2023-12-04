import { Component } from '@angular/core';
import { MenuService } from 'projects/shell-mf/src/app/layout/menu/app.menu.service';
import { Menu } from './model/menu';
import { ShearedService } from 'projects/shared-mf/src/app/service/sheared.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public menu: any[] = Menu;
  constructor() {
    localStorage.setItem('menu', JSON.stringify(this.menu));
  }

  ngOnInit() {}
}
