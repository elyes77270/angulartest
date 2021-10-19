import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  url="https://geo.api.gouv.fr/regions?fields=nom,code"

  constructor(private http:HttpClient) { }

  getRegions()
  {
    return this.http.get(this.url);
  }
}
