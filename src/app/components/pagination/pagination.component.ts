import { Component, Input, OnInit } from '@angular/core';
import { UserData } from 'src/app/services/user.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() userData: any;

  currentPageSize!: number;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor() { }

  ngOnInit(): void {
    this.currentPageSize = 5;
    console.log(this.userData);
  }

  nextPage() {
    console.log("next");
  }

  updatePaginator(pageSize: number) {
    console.log(pageSize);
  }

}
