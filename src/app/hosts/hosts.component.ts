import { Component, OnInit } from '@angular/core';
import {Host} from '../Models/hosts';

import { HostsService } from '../services/hosts.service';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent implements OnInit{
  hosts: Host[];
  blockedHosts: number[];
  constructor(private hostsService: HostsService) {}
  ngOnInit() {
    this.getHosts();
    this.blockedHosts = [];
  }
  getHosts() {
   this.hostsService.getHostsList().subscribe( hosts => {
      this.hosts = hosts;
   });
  }

  deleteHost(index: number) {
    this.hostsService.deleteHost(index).subscribe(() => this.getHosts());
    console.log(index);
  }

  updateHost(index: number) {
    this.blockedHosts.push(index);
    this.hostsService.updateHost(index).subscribe( (updatedHost) => {
      this.hosts = this.hosts.map( (host: Host) => {
        if (host.id === updatedHost.id) {
          return updatedHost;
        }
        else {
          return host;
        }
      });
      this.blockedHosts = this.blockedHosts.filter(hId => hId !== index);
    });
  }

}
