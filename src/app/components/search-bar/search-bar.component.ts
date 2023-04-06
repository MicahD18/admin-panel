import { Component, OnInit } from '@angular/core';

export interface EmployeeData {
  position: number;
  name: string;
  email: string;
  role: string;
  isSelected: boolean;
  isEditing: boolean;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: string = "";

  // TODO: Create a new array of objects with data from API endpoint
  employeeData: EmployeeData[] = [
    {position: 1, name: 'Aaron Miles', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false },
    {position: 2, name: 'Sarah Potter', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {position: 3, name: 'Jim McClain', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {position: 4, name: 'Caterina Binotto', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {position: 5, name: 'Arvind Kumar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {position: 6, name: 'Jeremy Skrdlant', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {position: 7, name: 'Micah Daise', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {position: 8, name: 'Morgan Pritchard', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {position: 9, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {position: 10, name: 'Michael Vars', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
  ];

  // TODO: Add API Service here
  constructor() { }

  ngOnInit(): void {
    // TODO: Call the function that sends an HTTP request to the API endpoint
  }

}
