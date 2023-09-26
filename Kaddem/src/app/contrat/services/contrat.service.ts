import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  readonly API_URL = 'http://localhost:8088';

  constructor(private httpClient: HttpClient,) { }


  GetAllContact() {
    return this.httpClient.get(`${this.API_URL}/ContratC/contrats`);
  }

  AddContact(Contrat: any) {
    return this.httpClient.post(`${this.API_URL}/ContratC/add-contrat`, Contrat)
  }

  editContact(Contrat: any) {
    return this.httpClient.put(`${this.API_URL}/ContratC/updateContrat`, Contrat)

  }

  deleteContact(id: any) { return this.httpClient.delete(`${this.API_URL}/ContratC/deleteContrat/${id}`) }

  search(q: any): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/' + 'contratC?da_like=' + q`
    );
  }

  searchh(n: any) {
    return this.httpClient.get(`${this.API_URL}/ContratC/search/${n}`)

  }

  Trier() {
    return this.httpClient.get(`${this.API_URL}/Trier`)

  }
}