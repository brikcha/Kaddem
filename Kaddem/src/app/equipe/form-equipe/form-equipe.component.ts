import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl,  Validators,FormBuilder,FormGroup} from "@angular/forms";
import { Equipe } from './../../model/Equipe';
import {EquipeService} from '../Service/equipe.service';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
  teamForm: any;
  id: number;
  list:Equipe[];
  editMode = false;
  mode:String;
  pattern="^[ a-zA-Z][a-zA-Z ]*$";


  constructor(private route: ActivatedRoute, private teamService: EquipeService, private router: Router,private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.teamService.GetAllEquipe({page:0, size:999}).subscribe(
        (data:Equipe[]) => {
          this.list=data['content'];
          this.route.params.subscribe((params: Params) => {
                this.id = +params['id'];

                this.editMode = params['id'] != null;

                if (this.editMode) {
                  this.mode = "Update"
                } else {
                  this.mode = "Add"
                }

                this.initForm();

              },
              () => {  },
              () => {  }
          )
        }
    )
  }

  private initForm() {
    let teamName = '';
    let teamLevel = '';
    let teamImage = '';


    if(this.editMode) {
      const team = this.list.find(u => u.idEquipe == this.id)!
      teamName = team.nomEquipe
      teamLevel = team.niveau
      teamImage = team.image

    }
  /*  this.teamForm=this.fb.group({
 
      nomEquipe:['',[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3)]],
      niveau:['',[Validators.required, Validators.maxLength(6)]],
      image:['',[Validators.required,Validators.required]]
     }); */
  
    this.teamForm = new FormGroup({
      'nomEquipe': new FormControl(teamName,[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      'niveau': new FormControl(teamLevel, Validators.required),
      'image': new FormControl(teamImage, Validators.required),

    })
  }

  Back() {
    this.router.navigate(['/home/equipe'])
  }

  onSubmit() {
    if (this.editMode) {
      this.teamService.editEquipe(this.teamForm.value, this.id).subscribe()
    } else {
      this.teamService.AddEquipe(this.teamForm.value).subscribe()
    }
    this.router.navigate(['/home/equipe'])
  }
}
