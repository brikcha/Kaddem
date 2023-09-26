
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Equipe } from '../../model/Equipe';
import { EquipeService } from '../Service/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})

export class ListEquipeComponent implements OnInit {
  public equipes: any[] = [];
  length: undefined;
  public page = 1;
  public pageSize = 2;
  searchText: any;
  constructor(private equipeService: EquipeService, private router: Router) { }

  ngOnInit(): void {
    this.getEquipesall();
  }

  getEquipesall() {
    this.equipeService.GetAllEquipe({ page: this.page - 1, size: this.pageSize }).subscribe(
      (data: Equipe[]) => {
        this.equipes = data['content'];
        console.log(this.equipes);
        this.length = data['totalElements'];
      },
      () => { console.log('error') },
      () => {

      }
    );
  }

  onSearchByName() {
    if (!this.searchText) {
      this.getEquipesall()
    } else {
      this.equipeService.searchByNameEquipe({ page: this.page - 1, size: this.pageSize }, this.searchText).subscribe(
        (data: Equipe[]) => {
          this.equipes = data['content'];
        }
      )
    }

  }

  deleteEquipe(equipe: Equipe) {
    let i = this.equipes.indexOf(equipe);
    if (confirm("Are you sure to delete " + equipe.nomEquipe)) {
      this.equipeService.deleteEquipe(equipe.idEquipe).subscribe(
        () => {
          this.equipes.splice(i, 1)
        }
      )
    }
  }

}
