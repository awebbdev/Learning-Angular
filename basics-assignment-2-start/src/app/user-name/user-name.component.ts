import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  userName = '';
  clearUserName = false;

  constructor() { }

  ngOnInit(): void {
  }

  onUserNameChange(input: string): void {
    if (input) {
      this.clearUserName = true;
    } else {
      this.clearUserName = false;
    }
  }

  onClearUserName() {
    this.userName = '';
  }

}
