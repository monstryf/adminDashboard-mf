import { Company } from './company';

export class Paging {
  totalItems!: number;
  pageSize?: number;
  page?: number;
  data: Company[] = [];
}
