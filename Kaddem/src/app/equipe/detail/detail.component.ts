import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DetailEq} from '../..//model/DetailEq';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() detail  : DetailEq
  @Output() notification: EventEmitter<DetailEq> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  notifyDeleteDetails() {
    this.notification.emit(this.detail)
  }
}
