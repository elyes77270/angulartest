import { Component } from '@angular/core';
import {RegionsService} from "./regions.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User';

  data:any;
  constructor(private postData:RegionsService){}
  ngOnInit()
  {
    this.postData.getRegions().subscribe((result)=>{
      this.data=result;
    })
  }
}
