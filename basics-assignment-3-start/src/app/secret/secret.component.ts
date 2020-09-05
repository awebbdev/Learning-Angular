import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  showSecret = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onShowSecret() {
    let secret = this.showSecret;
    this.showSecret = !secret;
    if(this.showSecret ) {
      this.logs.push({ Id: this.logs.length + 1, time: new Date().toLocaleTimeString()});
    }
  }

}
