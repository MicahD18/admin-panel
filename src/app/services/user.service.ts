import { Injectable } from '@angular/core';
import { UserData } from '../components/search-bar/search-bar.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // SAMPLE DATA
  userData: UserData[] = [
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

  constructor() { }

  // TODO: Send HTTP request to API endpoint
}
