

import { Representatives } from './representative';

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  date?: Date;
  status?: 'active' | 'inactive' | 'prospect';
  dateCreated?: Date;
  representative?: Representatives;
}
