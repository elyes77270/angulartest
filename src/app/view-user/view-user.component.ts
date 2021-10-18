import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  lstUser = [] as any;
  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('user') || '{}';
    this.lstUser = JSON.parse(data);
  }

  onDelete(id: any){
    console.log(id);
    let results = this.lstUser.slice(id);
    localStorage.setItem('user',JSON.stringify(this.lstUser));
    this.lstUser = results;
    
  }

}
