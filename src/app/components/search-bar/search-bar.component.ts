import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: string = "";

  // TODO: Add API Service here
  constructor(public userService: UserService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    // TODO: Call the function that sends an HTTP request to the API endpoint
    console.log(this.userService.userData);
    
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }
}
