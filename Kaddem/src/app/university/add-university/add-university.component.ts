import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversiteService } from 'app/Service/universite.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
  imageData = '';
  // @ts-ignore
  form: FormGroup;
  constructor(private universiteservice:UniversiteService , private route : Router) { }
  listUniversities : any ;
  ngOnInit(): void {
  }

  getAllUniversities(){
    this.universiteservice.GetAllUniversite().subscribe(res => this.listUniversities = res)
  }


  addUniv(UNI: any){
    this.universiteservice.AddUniversite(UNI).subscribe(data => {
      window.alert('Your university has been added !');
      this.route.navigate(['/home/university']);
    });

  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({ image: event.target.files[0].name });
      const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
      if (file && allowedMimeTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
  }




}
