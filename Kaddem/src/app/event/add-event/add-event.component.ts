import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UniversiteService } from 'app/Service/universite.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  listEvents: any;
  EVENT: any;
  formBui: FormGroup
  universites: any[] = []

  constructor(private eventservice: EventService, private route: Router, private fb: FormBuilder, private universiteservice: UniversiteService) {

    this.formBui = this.fb.group({

      nomEvent: ['', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.minLength(3)]],
      location: [''],
      dateEvent: [''],
      universite: ['']
    });

  }




  ngOnInit(): void {

    this.universiteservice.GetAllUniversite().subscribe((data) => {
      this.universites = data;
    });
  }

  getAllEvents() {
    this.eventservice.GetAllEvents().subscribe(res => this.listEvents = res)
  }

  addUniv(EVENT: any) {
    this.eventservice.AddEvent(EVENT).subscribe(() => console.log("hedhaaaaa", EVENT)
    );
    window.alert('Your event has been added !');
    this.route.navigate(['events'])
    console.log("hedhaaaaa", EVENT)

  }



  Affect() {

    const farah = {
      nomEvent: this.formBui.get('nomEvent').value,
      type: this.formBui.get('type').value,
      description: this.formBui.get('description').value,
      location: this.formBui.get('location').value,
      dateEvent: this.formBui.get('dateEvent').value
    }

    this.eventservice.Affect(farah, this.formBui.get('universite').value).subscribe(data => {
      window.alert('Your event has been added !');
      this.route.navigate(['/home/events'])
    });
    
  }


}
