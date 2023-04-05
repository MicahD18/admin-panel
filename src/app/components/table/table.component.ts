import { Component, Input, OnInit } from '@angular/core';
import { EmployeeData } from '../search-bar/search-bar.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() employeeData?: EmployeeData[];
  @Input() searchText!: string;

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name'];
  dataSource: any = this.employeeData;

  deleteUser(index: number) {
    console.log(index);
    this.employeeData?.map((item:any) => {
      
      if (index === item.position) {
        this.employeeData?.splice(index, 1);
      }
    })
  }
}
