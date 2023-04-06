import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<TableComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  roles: string[] = ["Member", "Admin"];

  ngOnInit(): void {
    console.log(this.data);
  }

  saveChanges() {
    this._bottomSheetRef.dismiss();
  }

}
