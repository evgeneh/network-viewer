import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Host} from '../Models/hosts';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.scss']
})
export class HostsComponent {
  @Input() hosts: Host[];
  @Input() blockedHosts: number[];
  @Output() updateHost: EventEmitter<number> = new EventEmitter();
  @Output() deleteHost: EventEmitter<number> = new EventEmitter();

  onHostUpdate(id: number) {
    this.updateHost.emit(id);
  }
  onHostDelete(id: number) {
    this.deleteHost.emit(id);
  }

}
