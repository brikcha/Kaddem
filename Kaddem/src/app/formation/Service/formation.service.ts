import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpClient: HttpClient) { }


  GetAllFormation()
  {
      return this.httpClient.get<[]>(`${environment.API_URL}/FormationC/`);
  }

AddFormation(formation : any):Observable<any> 
{

  return this.httpClient.post(`${environment.API_URL}/FormationC/addFormation`,formation )
}

editFormation(formation:any)
{
  return this.httpClient.put(`${environment.API_URL}/FormationC/updateformation`,formation)

}

deleteFormation(id : any)
{return this.httpClient.delete(`${environment.API_URL}/FormationC/deleteFormation/${id}`)}


GetAllFormationById(id : any)
{
    return this.httpClient.get(`${environment.API_URL}/FormationC/FormationById/${id}`);
}



searchh(n:string)
{
  return this.httpClient.get(`${environment.API_URL}/FormationC/search/${n}`)

}

Trier()
{
  return this.httpClient.get(`${environment.API_URL}/FormationC/Trier`)

}













// affecteretudiantdepartement(ide:any,idb:any,etud:any)

// {
//   return this.httpClient.put(`${environment.API_URL}/EtudiantC/affectationEtudiant_dep/${ide}/${idb}`,etud)

// }

// AddEtudiantt(etudiant:any ,idepartement : any)
// {

//   return this.httpClient.post(`${environment.API_URL}/EtudiantC/addEtudiantt/${idepartement}`,etudiant)
// }




// uploadFile(file: File): Observable<HttpEvent<{}>> {
//   const formdata: FormData = new FormData();
//   formdata.append('file', file);
//   const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
//       reportProgress: true,
//       responseType: 'text'
//   });

//   return this.httpClient.request(req);
//  }



//  editEtudiantt(etudiant:any ,idepartement : any)
//  {
//    return this.httpClient.put(`${environment.API_URL}/EtudiantC/updateEtudiantt/${idepartement}`,etudiant)
 
//  }


}

