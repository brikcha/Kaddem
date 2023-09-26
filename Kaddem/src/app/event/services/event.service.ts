import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  readonly API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) {}



  GetAllEvents()
  {
      return this.httpClient.get(`${this.API_URL}/EventsC/`);
  }


  AddEvent(Event:any)
{

  return this.httpClient.post(`${this.API_URL}/EventsC/addEvent`,Event);
  
}

UpdateEvent(Event:any,idEvent:any)
{
  return this.httpClient.put(`${this.API_URL}/EventsC/updateEvent/${idEvent}`,Event);

}


deleteUniversite(id : any)
{return this.httpClient.delete(`${this.API_URL}/EventsC/deleteEvent/${id}`)}


GetEventById(id : any)
  {
      return this.httpClient.get(`${this.API_URL}/EventsC/EventById/${id}`);
  }


Affect(Event:any , idUniv:any)
{
  return this.httpClient.post(`${this.API_URL}/EventsC/addAndAssignEvent/${idUniv}`,Event);
}

search(searchValue){
  return this.httpClient.get(`${this.API_URL}/EventsC/search/${searchValue}`);
}


}
