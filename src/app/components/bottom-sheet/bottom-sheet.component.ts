import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { TableComponent } from '../table/table.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UserData, UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css'],
})
export class BottomSheetComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<
      TableComponent,
      SearchBarComponent
    >,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private userService: UserService
  ) {}

  name!: string;
  email!: string;
  roles: string[] = ['member', 'admin'];
  newRole!: string;

  ngOnInit(): void {
    console.log(this.data);

    // set name and email to data passed in
    this.name = this.data?.user.name;
    this.email = this.data?.user.email;
    this.newRole = this.data?.user.role;

    // if no data, then return to silence errors
    // if (this.data.allData == null) {
    //   console.log("data is null...");
    //   return;
    // }
  }

  selectRole(role: string) {
    // set the newRole property to the role selected
    this.newRole = role;
  }

  updateUser() {
    this.data.user.name = this.name;
    this.data.user.email = this.email;
    this.data.user.role = this.newRole;

    this._bottomSheetRef.dismiss();
  }

  createUser(newData: any) {
    console.log(this.name, this.email, this.newRole);

    let id = newData.length + 1;
    let newId = id.toString();

    newData.push({
      id: newId,
      name: this.name,
      email: this.email,
      role: this.newRole,
      isSelected: false,
      isEditing: false,
    });

    console.log(newData);

    this.userService.setNewData(newData);

    this._bottomSheetRef.dismiss();
  }
}
