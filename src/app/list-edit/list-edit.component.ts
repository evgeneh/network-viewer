import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {validateIPAddress} from '../../common/validator';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.scss']
})
export class ListEditComponent implements OnInit {
  @Output() submit = new EventEmitter();
  @Output() close = new EventEmitter();
  hostAddListStr = '';
  hostsArray: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  closeWindow(): void {
    this.close.emit();
  }
  onSubmit() {
    this.submit.emit(this.hostsArray);
  }
  changeHandler() {
    this.hostsArray =  this.hostAddListStr.split('\n')
      .filter( addr => validateIPAddress(addr));
  }
}
