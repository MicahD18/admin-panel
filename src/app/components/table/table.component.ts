import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { UserData, UserService } from 'src/app/services/user.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() initData!: UserData[]; // initial data OnInit

  @Input() allData: UserData[] = []; // all data passes here

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
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers();

    setTimeout(() => {
      this.allData = this.userService.newData;

      this.initData = this.allData;

      // Calculate the total number of pages
      this.sliceData(0, 10);
    }, 500);
  }

  deleteUser(index: number, name: string) {
    // remove item based on index for init data
    this.initData?.splice(index, 1);

    // if the item in allData == name passed in,
    // set the item's isDeleted property to true
    this.allData.forEach((item: any) => {
      if (item.name == name) {
        item.isDeleted = true;
      }
    });

    // filter the items that are false
    const filteredData = this.allData.filter((item: any) => {
      return item.isDeleted == false;
    });

    // set the filteredData to allData
    this.allData = filteredData;
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
    // filter init data
    const filterInitData = this.initData.filter((item: any) => {
      return item.isSelected !== true;
    });
    // set data to the filtered array
    this.initData = filterInitData;
    this.selected = false;

    // filter all data
    const filterAllData = this.allData.filter((item: any) => {
      return item.isSelected !== true;
    });

    this.allData = filterAllData;
  }

  editUser(index: number) {
    this.initData[index].isEditing = true;
    this.editing = true;

    this.openBottomSheet(index);
  }

  openBottomSheet(index: number): void {
    this._bottomSheet.open(BottomSheetComponent, {
      data: {
        user: this.allData[index],
        allData: this.allData,
        createUser: false, // property that checks what to render on bottom-sheet component
      },
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
}
