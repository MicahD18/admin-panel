import { Injectable } from '@angular/core';

export interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  isSelected: boolean;
  isEditing: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // SAMPLE DATA
  userData: UserData[] = [
    {id: 0, name: 'Aaron Miles', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false },
    {id: 1, name: 'Sarah Potter', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 2, name: 'Jim McClain', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 3, name: 'Caterina Binotto', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 4, name: 'Arvind Kumar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 5, name: 'Jeremy Skrdlant', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 6, name: 'Micah Daise', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 7, name: 'Morgan Pritchard', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 8, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 9, name: 'Michael Vars', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
  ];

  updateUserData(name: string, email: string, role: string) {
    console.log(name, email, role);
    
  }

  constructor() { }

  // TODO: Send HTTP request to API endpoint
}
