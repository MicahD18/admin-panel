import { Component, OnInit } from '@angular/core';
import { UserData, UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchText: string = "";

  // TODO: Add API Service here
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    // TODO: Call the function that sends an HTTP request to the API endpoint
  }

}
