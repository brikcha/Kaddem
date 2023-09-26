import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {
EVENT:Event;
updateEvent= new FormGroup({
  nomEvent: new FormControl('',Validators.required),
  type:new FormControl('',Validators.required),
  description:new FormControl('',Validators.required),
  location:new FormControl('',Validators.required),
  dateEvent:new FormControl('',Validators.required)
})
  constructor(private eventservice:EventService,private route: Router , private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventservice.GetEventById(this.router.snapshot.params.id).subscribe((result)=> {
      this.updateEvent= new FormGroup({
      nomEvent: new FormControl(result['nomEvent']),
      type: new FormControl(result['type']),
      description:new FormControl(result['description']),
      location:new FormControl(result['location']),
      dateEvent:new FormControl(result['dateEvent'])
    })})

  }


  editEvent(Event : Event , idEvent:any){
    this.eventservice.UpdateEvent(Event,this.router.snapshot.params.id).subscribe(data => {
      window.alert('Your event has been modified !');
      this.route.navigate(['/home/events'])
    });

  }

  GetEventByID(idEvent: any){

    this.eventservice.GetEventById(idEvent).subscribe();
  
  }

}
