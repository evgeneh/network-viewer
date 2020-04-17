import {Component, EventEmitter, Output} from '@angular/core';
import {validateIPAddress} from '../../common/validator';
import {HostsService} from '../services/hosts.service';

@Component({
  selector: 'app-add-host',
  templateUrl: './add-host.component.html',
  styleUrls: [ './add-host.component.scss'
  ]
})
export class AddHostComponent {
  isInputShow = false;
  buttonSymbol = '+';
  newHost = '';
  isNewHostAddDisabled = false;
  showIpList = false;
  @Output() getHostList = new EventEmitter();
  //
  constructor(private hostsService: HostsService) {}
  /*show upload form if click*/
  toggleInput() {
    this.isInputShow = ! this.isInputShow;
    this.buttonSymbol = this.isInputShow ? '^' : '+';
  }
  changeHandler() {
    this.isNewHostAddDisabled = ! validateIPAddress(this.newHost);
  }
  addHost(){
    if (validateIPAddress(this.newHost)) {
      this.isNewHostAddDisabled = true;
      this.hostsService.addNewHost(this.newHost).subscribe((result) => {
        if (result) {
          this.newHost = '';
        }
        this.isNewHostAddDisabled = false;
      });
    }
  }
  addHostList(hosts: string[]) {
    if (hosts?.length) {

      this.hostsService.addNewHostList(hosts).subscribe((result) => {
        if (result) {
          this.newHost = '';
          this.getHostList.emit();
        }
      });
    }
  }
  closeList(){
    this.showIpList = false;
  }
  submitList(values: string[]){
    this.showIpList = false;
    this.addHostList(values);
  }
}


