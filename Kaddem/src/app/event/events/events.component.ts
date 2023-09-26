import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { TokenStorageService } from './../../login/services/token-storage.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
Events:any;
ListEvents:any;
idEvent:any;
public _eventFilter:string='';
public filteredEvents :any;
searchvalue:any
  userRole = null;

  constructor(private route :Router , private tokenStorage: TokenStorageService, private eventservice:EventService , private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.userRole = this.tokenStorage.getUser().roles[0];

  }

  go(){
    this.route.navigate(['modify'])
  }


  getAllEvents(){
    this.eventservice.GetAllEvents().subscribe(res => this.ListEvents = res)
  }


  delete(i:any){
    this.ListEvents.splice(i,1)
  }

  deleteEvent( idEvent : any , i:any){
    this.idEvent=this.ac.snapshot.params['idEvent'];
    this.eventservice.deleteUniversite(idEvent).subscribe();
    window.alert('Your event has been deleted !');
    this.delete(i);
  } 

  GetEventById(id : any)
  {
    this.eventservice.GetEventById(id).subscribe(res => this.ListEvents = res)
  }

  public get eventFilter():string{
    return this._eventFilter;
  }

  public set eventFilter(filter:string){
    this._eventFilter = filter;
    this.filteredEvents = this.eventFilter ? this.filteredEvents(this.eventFilter) : this.ListEvents;
  }

  public filterEvent(criteria:string): Event[]{
    criteria = criteria.toLowerCase();
    if (criteria==''){this.ngOnInit();}
    else{
    this.ListEvents = this.ListEvents.filter(
      (Event : Event) => Event.type.toLowerCase().match(criteria))
    ;
    return this.ListEvents;
  }
  }

  onsearch(){
    this.eventservice.search(this.searchvalue).subscribe(
      (data) => {
        if ( this.searchvalue != null) {
          this.ListEvents = data;
        }
      },
      () => this.getAllEvents()
      
    );

}

getColor(type) { (2)
  switch (type) {
    case 'FORMATION':
      return 'red';
    case 'SEMINAIRE':
      return 'blue';
    case 'ATELIER':
      return 'indianred';
      case 'TEDTALK':
        return 'crimson';
      case 'VISITEGUIDEE':
       return 'aquamarine';
  }
}
}
