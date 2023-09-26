import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Equipe } from 'app/model/Equipe';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  @Input() equipe : Equipe
  @Output() notification: EventEmitter<Equipe> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log(this.equipe);
  }

  notifyDeleteEquipe() {
    this.notification.emit(this.equipe)
  }
}
