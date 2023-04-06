import { Component, Input, OnInit } from '@angular/core';
import { EmployeeData } from '../search-bar/search-bar.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() employeeData!: EmployeeData[];
  @Input() searchText!: string;

  allSelected: boolean = false;

  // check if any boxes are selected
  selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log(this.employeeData);
  }

  displayedColumns: string[] = ['name'];
  dataSource: any = this.employeeData;

  deleteUser(index: number) {
    this.employeeData?.map((item: any) => {
      if (index === item.position) {
        this.employeeData?.splice(index, 1);
      }
    });
  }

  selectAll(selected: boolean) {
    this.allSelected = selected;

    if (this.employeeData == null) {
      return;
    }
    this.employeeData.forEach((item: any) => {
      // set all isSelected properties to true
      item.isSelected = selected;
    });

    this.selectUser();
  }

  selectUser() {
    for (let i = 0; i < this.employeeData.length; i++) {
      if (this.employeeData[i].isSelected) {
        this.selected = true;
        // break out of loop if isSelected property in the object is true
        break;
      }
      // if no isSelected property is true, set selected to false
      this.selected = false;
    }
  }

  // TODO: filter items that are false
  deleteSelectedUsers() {}
}
