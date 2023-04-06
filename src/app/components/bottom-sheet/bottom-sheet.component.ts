import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { TableComponent } from '../table/table.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { UserService } from 'src/app/services/user.service';
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
  roles: string[] = ['Member', 'Admin'];
  newRole!: string;

  ngOnInit(): void {
    // set name and email to data passed in
    this.name = this.data?.name;
    this.email = this.data?.email;
    this.newRole = this.data?.role;

    // if no data, then return to silence errors
    if (this.data == null) {
      return;
    }
  }

  selectRole(role: string) {
    // set the newRole property to the role selected
    this.newRole = role;
  }

  updateUser() {
    this.data.name = this.name;
    this.data.email = this.email;
    this.data.role = this.newRole;

    this._bottomSheetRef.dismiss();
  }

  createUser() {
    console.log(this.name, this.email, this.newRole);

    this.userService.userData.push({
      id: this.userService.userData.length + 1,
      name: this.name,
      email: this.email,
      role: this.newRole,
      isSelected: false,
      isEditing: false,
    });

    this._bottomSheetRef.dismiss();
  }
}
