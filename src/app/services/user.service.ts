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

  createdUser: boolean = false;

  newData: any[] = [];

  constructor(private http: HttpClient) { }

  apiEndpoint = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  getUsers() {
    return this.http.get<any>(this.apiEndpoint).subscribe((data: any) => {
        data.forEach((user:any) => {
          const role = user.role.charAt(0).toUpperCase() + user.role.substr(1).toLowerCase()
          user.role = role;
        });
        
        this.newData = data.map((user: any) => ({
          ...user,
          isSelected: false,
          isEditing: false,
          isDeleted: false
        }));
      });
  }

  setNewData(newData: any) {
    this.newData = newData;
  }
}
