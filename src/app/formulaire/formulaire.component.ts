import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  public saveData(formulaireForm: NgForm){
    console.log(formulaireForm.form);
    const jsonData = JSON.stringify(formulaireForm.value);
    localStorage.setItem('myData', jsonData);
    console.log(jsonData);
  }

  public getData() {
    return localStorage.getItem('myData')
  }

}
