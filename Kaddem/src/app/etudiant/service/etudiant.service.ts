import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
 

  constructor(private httpClient: HttpClient)

  {}

  GetAllEtudiant()
  {
      return this.httpClient.get<[]>(`${environment.API_URL}/UserC/`);
  }

AddEtudiant(etu : any):Observable<any> 
{

  return this.httpClient.post(`${environment.API_URL}/UserC/addEtudiant`,etu )
}

editEtudiant(etud:any)
{
  return this.httpClient.put(`${environment.API_URL}/UserC/updateEtudiant`,etud)

}

deleteEtudiant(idEtudiant : any)
{return this.httpClient.delete(`${environment.API_URL}/UserC/deleteEtudiant/${idEtudiant}`)}


GetAllEtudiantById(idEtudiant : any)
{
    return this.httpClient.get(`${environment.API_URL}/UserC/EtudiantById/${idEtudiant}`);
}

search(q: string): Observable<any> {
  return this.httpClient.get(
    `${environment.API_URL}/' + 'UserC?nom_like=' + q`
  );
}

searchh(n:string)
{
  return this.httpClient.get(`${environment.API_URL}/UserC/search/${n}`)

}

Trier()
{
  return this.httpClient.get(`${environment.API_URL}/UserC/Trier`)

}

affecteretudiantdepartement(ide:any,idb:any,etud:any)

{
  return this.httpClient.put(`${environment.API_URL}/UserC/affectationEtudiant_dep/${ide}/${idb}`,etud)

}

AddEtudiantt(etudiant:any ,idepartement : any)
{

  return this.httpClient.post(`${environment.API_URL}/UserC/addEtudiantt/${idepartement}`,etudiant)
}




uploadFile(file: File): Observable<HttpEvent<{}>> {
  const formdata: FormData = new FormData();
  formdata.append('file', file);
  const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
      reportProgress: true,
      responseType: 'text'
  });

  return this.httpClient.request(req);
 }



 editEtudiantt(etudiant:any ,idepartement : any)
 {
   return this.httpClient.put(`${environment.API_URL}/UserC/updateEtudiantt/${idepartement}`,etudiant)
 
 }

 
}
