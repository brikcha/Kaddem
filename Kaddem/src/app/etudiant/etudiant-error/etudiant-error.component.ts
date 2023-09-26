import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-error',
  templateUrl: './etudiant-error.component.html',
  styleUrls: ['./etudiant-error.component.css']
})
export class EtudiantErrorComponent implements OnInit {

  @Input() error: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.error);
  }

}
