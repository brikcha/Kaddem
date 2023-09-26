import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DetailEq} from '../../model/DetailEq';
import {DetailEquipeService} from '../Service/detail-equipe.service';
import {Equipe} from '../../model/Equipe';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  public details: DetailEq[];
  public detailsList: DetailEq[];
  public length: number = 0;
  public page = 1;
  public pageSize=3;
  searchText: any;
  constructor(private detailService: DetailEquipeService, private router:Router) { }

  ngOnInit(): void {
    this.detailService.GetAllDetailEquipe().subscribe(
        (data:DetailEq[]) => {
          this.details=data;
        },
        () => { console.log('error') },
        () => {   this.detailsList = this.details;
          this.length = this.detailsList.length;
        }
    );
  }

  deleteDetails(detail: DetailEq) {
    let i = this.detailsList.indexOf(detail);
    if(confirm("Are you sure to delete "+detail.idDetailEquipe)) {
      this.detailService.deleteDetailEquipe(detail.idDetailEquipe).subscribe(
          ()=>{
            this.detailsList.splice(i,1)
          }
      )
    }
  }

}
