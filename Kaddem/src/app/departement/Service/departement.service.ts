import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departement } from './../../model/Departement';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private httpClient: HttpClient) { }


  public GetAllDepartement():Observable<Departement[]>
  {
      return this.httpClient.get<Departement[]>(`${environment.API_URL}/DepartementC/departements`);
  }


  AddDepartement(depa:any)
  {
    return this.httpClient.post(`${environment.API_URL}/DepartementC/add-departement`,depa)
  }



  editDepartement(depar:any)
{
  return this.httpClient.put(`${environment.API_URL}/DepartementC/updateDepartement`,depar)

}

deleteDepartement(id : any)
{return this.httpClient.delete(`${environment.API_URL}/DepartementC/deleteDepartement/${id}`)
}



affecter(ide:any,idb:any)

{
  return this.httpClient.put(`${environment.API_URL}/DepartementC/affecter_universite_departement/${ide}/${idb}`,{})

}















}
