
import { Representatives } from './representative';

export interface Humans {
  id: number;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  date?: Date;
  dateCreated?: Date;
  representative?: Representatives;
}
