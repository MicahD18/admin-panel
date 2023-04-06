import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../search-bar/search-bar.component';
import {MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() userData!: UserData[];
  @Input() searchText!: string;

  allSelected: boolean = false;

  // check if any boxes are selected
  selected: boolean = false;
  editing: boolean = false;

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['name'];
  dataSource: any = this.userData;

  deleteUser(index: number) {
    this.userData?.splice(index, 1);
    console.log(this.userData);
  }

  selectAll(selected: boolean) {
    this.allSelected = selected;

    if (this.userData == null) {
      return;
    }
    this.userData.forEach((item: any) => {
      // set all isSelected properties to true
      item.isSelected = selected;
    });

    this.selectUser();
  }

  selectUser() {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].isSelected) {
        this.selected = true;
        // break out of loop if isSelected property in the object is true
        break;
      }
      // if no isSelected property is true, set selected to false
      this.selected = false;
    }
  }

  // filters items that are false
  deleteSelectedUsers() {
    const filteredArray = this.userData.filter((item: any) => {
      return item.isSelected !== true;
    });
    // set data to the filtered array
    this.userData = filteredArray;
    this.selected = false;
  }

  editUser(index: number) {
    this.userData[index].isEditing = true;
    this.editing = true;
    
    this.openBottomSheet(index);
  }

  openBottomSheet(index: number): void {
    this._bottomSheet.open(BottomSheetComponent, { data: this.userData[index] });
  }
}
