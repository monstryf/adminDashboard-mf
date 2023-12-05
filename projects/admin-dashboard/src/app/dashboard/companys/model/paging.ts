import { Company } from './company';

export class Paging {
  totalItems: number = 0;
  pageSize: number = 0;
  page: number = 0;
  data: Company[] = [];
}
