import { Branch } from './branch';

export class Company {
  id?: any;
  name?: string;
  email?: string;
  phone?: string;
  fax?: string;
  webUrl?: string;
  faceBook?: string;
  logo?: string;
  status!: number;
  mainBranch: Branch = new Branch();
  branch: Branch[] = [];
}
