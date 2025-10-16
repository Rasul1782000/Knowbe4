import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HumanService } from '../../service/humanservice';

export interface Candidate {
  id: number;
  name: string;
  role: string;
  experience: string; // e.g., "3 yrs"
}

const CANDIDATE_DATA: Candidate[] = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', experience: '3 yrs' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', experience: '5 yrs' },
  { id: 3, name: 'Charlie Brown', role: 'Fullstack Developer', experience: '4 yrs' },
  { id: 4, name: 'Diana Prince', role: 'UI/UX Designer', experience: '2 yrs' },
  { id: 5, name: 'Ethan Hunt', role: 'DevOps Engineer', experience: '6 yrs' },
  { id: 6, name: 'Fiona Gallagher', role: 'Frontend Developer', experience: '3 yrs' },
  { id: 7, name: 'George Martin', role: 'Backend Developer', experience: '5 yrs' },
  { id: 8, name: 'Hannah Lee', role: 'Fullstack Developer', experience: '4 yrs' },
  { id: 9, name: 'Ian Curtis', role: 'Mobile Developer', experience: '3 yrs' },
  { id: 10, name: 'Julia Roberts', role: 'UI/UX Designer', experience: '2 yrs' },
  { id: 11, name: 'Kevin Hart', role: 'Frontend Developer', experience: '3 yrs' },
  { id: 12, name: 'Laura Croft', role: 'Backend Developer', experience: '5 yrs' },
  { id: 13, name: 'Michael Scott', role: 'Fullstack Developer', experience: '4 yrs' },
  { id: 14, name: 'Nancy Drew', role: 'UI/UX Designer', experience: '2 yrs' },
  { id: 15, name: 'Oscar Wilde', role: 'DevOps Engineer', experience: '6 yrs' },
  { id: 16, name: 'Pam Beesly', role: 'Frontend Developer', experience: '3 yrs' },
  { id: 17, name: 'Quentin Tarantino', role: 'Backend Developer', experience: '5 yrs' },
  { id: 18, name: 'Rachel Green', role: 'Fullstack Developer', experience: '4 yrs' },
  { id: 19, name: 'Steve Rogers', role: 'Mobile Developer', experience: '3 yrs' },
  { id: 20, name: 'Tony Stark', role: 'DevOps Engineer', experience: '7 yrs' },
];

@Component({
  selector: 'app-customerpaymenttable',
  templateUrl: './customerpaymenttable.html',
  styleUrls: ['./customerpaymenttable.scss'],
  standalone: false,
  providers: [HumanService]
})
export class CustomerpaymenttableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'role', 'experience'];
  dataSource = new MatTableDataSource<Candidate>(CANDIDATE_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
