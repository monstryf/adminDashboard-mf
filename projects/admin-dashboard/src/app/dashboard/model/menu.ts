import { routes } from 'projects/shell-mf/src/app/shared/router/router';

export const Menu = [
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
    role: [],
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        // routerLink: ["settings"],
        role: [],
      },
    ],
  },
  {
    label: 'companys',
    role: [],
    items: [
      {
        label: 'Company List',
        icon: 'pi pi-fw pi-home',
        routerLink: [routes.companyList],
        role: [],
      },
    ],
  },
];
