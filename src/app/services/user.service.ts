import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

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
    {id: 10, name: 'Jeremy Skrdlant', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 11, name: 'Micah Daise', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 12, name: 'Morgan Pritchard', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 13, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 14, name: 'Michael Vars', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 15, name: 'Jeremy Skrdlant', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 16, name: 'Micah Daise', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 17, name: 'Morgan Pritchard', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 18, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 19, name: 'Michael Vars', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 20, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 21, name: 'Michael Vars', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 22, name: 'Jeremy Skrdlant', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
    {id: 23, name: 'Micah Daise', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 24, name: 'Morgan Pritchard', email: "sample@gmail.com", role: 'Member', isSelected: false, isEditing: false},
    {id: 25, name: 'Bryce TerHaar', email: "sample@gmail.com", role: 'Admin', isSelected: false, isEditing: false},
  ];

  createdUser: boolean = false;

  newData: any[] = [];

  constructor(private http: HttpClient) { }

  apiEndpoint = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  getUsers() {
    return this.http.get<any>(this.apiEndpoint).subscribe((data: any) => {
        this.newData = data.map((item: any) => ({
          ...item,
          isSelected: false,
          isEditing: false,
        }));
      });
  }

  setNewData(newData: any) {
    this.newData = newData;
  }
}
