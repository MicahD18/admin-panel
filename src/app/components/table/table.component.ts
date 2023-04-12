import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { UserData, UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() userData!: UserData[]; // all data passes in here

  @Input() initData!: UserData[]; // initial data OnInit

  @Input() allData: UserData[] = [];

  @Input() newData: UserData[] = [];

  @Input() searchText!: string;

  allSelected: boolean = false;

  // check if any boxes are selected
  selected: boolean = false;
  editing: boolean = false;

  currentPage: number = 1;
  totalPages!: number;

  itemsPerPage: number = 5;

  itemNumbers: number[] = [5, 10, 25, 100];

  // add 5 to endIndex when user goes to next page,
  // and subtract 5 when user goes to previous page
  endIndex: number = 0;
  startIndex: number = 0;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.allData = data.map((item: any) => ({
        ...item,
        isSelected: false,
        isEditing: false,
      }));

      this.initData = this.allData;
      
      // Calculate the total number of pages
      this.sliceData(0, 5);
    });
  }

  displayedColumns: string[] = ['name'];
  dataSource: any = this.allData;

  deleteUser(index: number) {
    this.initData?.splice(index, 1);
    console.log(this.initData);
    console.log(this.userData);
  }

  selectAll(selected: boolean) {
    this.allSelected = selected;

    if (this.initData == null) {
      return;
    }
    this.initData.forEach((item: any) => {
      // set all isSelected properties to true
      item.isSelected = selected;
    });

    this.selectUser();
  }

  selectUser() {
    for (let i = 0; i < this.initData.length; i++) {
      if (this.initData[i].isSelected) {
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
    const filteredArray = this.initData.filter((item: any) => {
      return item.isSelected !== true;
    });
    // set data to the filtered array
    this.initData = filteredArray;
    this.selected = false;
  }

  editUser(index: number) {
    this.initData[index].isEditing = true;
    this.editing = true;

    this.openBottomSheet(index);
  }

  openBottomSheet(index: number): void {
    console.log(this.allData);
    console.log("Hello World")
    this._bottomSheet.open(BottomSheetComponent, {
      data: { user: this.allData[index], allData: this.allData, createUser: false },
    });
  }

  selectItemsPerPage(item: number) {
    this.itemsPerPage = item;

    this.currentPage = 1;

    this.sliceData(0, item);
  }

  prev() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;

      // pass next start index and items per page
      this.sliceData(
        this.startIndex - this.itemsPerPage,
        this.endIndex - this.itemsPerPage
      );
    }
  }

  next() {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;

      // pass next start index and items per page
      this.sliceData(
        this.startIndex + this.itemsPerPage,
        this.endIndex + this.itemsPerPage
      );
    }
  }

  sliceData(startIndex: number, endIndex: number) {
    this.startIndex = startIndex;
    this.endIndex = endIndex;

    // Calculate the total number of pages
    this.totalPages = Math.ceil(this.allData.length / this.itemsPerPage);
    // set init data to user data
    this.initData = this.allData;

    // slice init data
    const slicedUserData = this.initData.slice(startIndex, endIndex);

    // set init data to the new sliced user data array
    this.initData = slicedUserData;
  }

  test() {
    console.log(this.allData);
  }
}
