import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Chef_Departement } from 'app/model/Chef_Departement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefDepartementService {

  constructor(private httpClient: HttpClient) { }




  public GetAllChefDepartement(): Observable<Chef_Departement[]> {
    return this.httpClient.get<Chef_Departement[]>(`${environment.API_URL}/Chef_DepartementC/chef_departements`);
  }


  AddChefDepartement(depa: any) {

    return this.httpClient.post(`${environment.API_URL}/Chef_DepartementC/add-chef_departement`, depa)
  }


  editChefDepartement(depar: any) {
    return this.httpClient.post(`${environment.API_URL}/Chef_DepartementC/updateChef_Departement`, depar)

  }

  deleteChefDepartement(id: any) { return this.httpClient.delete(`${environment.API_URL}/Chef_DepartementC/deletechef_Departement/${id}`) }

  ///Chef_DepartementC/affecter_depart_chef/{idDepart}/{idChefDpart}
  affectcheftodepart(iddepart: any, idchef: any) { return this.httpClient.post(`${environment.API_URL}/Chef_DepartementC/affecter_depart_chef/${iddepart}/${idchef}`, null) }







}
