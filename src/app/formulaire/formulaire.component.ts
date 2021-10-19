import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {RegionsService} from "./regions.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public user: User = new User();

  loginForm= new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    regions: new FormControl('', Validators.required)
  })

  lstUser = [] as any;

  oldUserLst = [];

  constructor(private postData:RegionsService) { }

  data:any;

  ngOnInit() {
    this.oldUserLst = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.oldUserLst);
    this.postData.getRegions().subscribe((result)=>{
      this.data=result;
    })
  }

  onSave(){
    if(this.user){
      this.lstUser = this.oldUserLst;
      this.lstUser.push(this.user)
      localStorage.setItem('user',JSON.stringify(this.lstUser));
      console.log(this.user);
      this.user = new User;
    }
  }

}