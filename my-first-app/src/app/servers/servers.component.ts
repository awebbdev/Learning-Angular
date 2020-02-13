import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName = '';
  allowNewServer = false;
  serverCeationStatus = 'No Server was created';
  serverCreated = false;
  servers = ['Testserver01', 'Testserver02'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCeationStatus = 'Server was created Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

}
