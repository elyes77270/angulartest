import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public user: User = new User();

  lstUser = [] as any;

  oldUserLst = [];

  constructor() { }

  ngOnInit() {
    this.oldUserLst = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.oldUserLst);
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