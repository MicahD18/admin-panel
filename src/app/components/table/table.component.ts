import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { UserData } from 'src/app/services/user.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() userData!: UserData[]; // all data passes in here

  initData!: UserData[]; // initial data OnInit

  @Input() searchText!: string;

  allSelected: boolean = false;

  // check if any boxes are selected
  selected: boolean = false;
  editing: boolean = false;

  currentPage: number = 1;
  totalPages!: number;

  itemsPerPage: number = 5;

  itemNumbers: number[] = [5, 10, 25, 100];

  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {
    this.initData = this.userData;
    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.userData.length / this.itemsPerPage);
    console.log(this.totalPages);

    // for (let i = 1; i <= totalPages; i++) {
    //   const startIndex = (i - 1) * this.itemsPerPage;
    //   const endIndex = startIndex + this.itemsPerPage;

    //   const currentPageData = this.userData.slice(startIndex, endIndex);
    //   console.log(currentPageData);

    // }

    // OnInit, show 5 items per page
    const slicedUserData = this.initData.slice(0, 5);
    console.log(slicedUserData);
    this.initData = slicedUserData;
  }

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
    this._bottomSheet.open(BottomSheetComponent, {
      data: this.userData[index],
    });
  }

  selectItemsPerPage(item: number) {
    this.itemsPerPage = item;
    console.log(this.itemsPerPage);

    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.userData.length / this.itemsPerPage);
    console.log(this.totalPages);

    console.log(item);
    // set user data to init data
    this.initData = this.userData;
    console.log(this.initData);
    // slice init data
    const slicedUserData = this.initData.slice(0, item);
    // set init data to the new sliced user data array
    this.initData = slicedUserData;
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
    
  }
}
