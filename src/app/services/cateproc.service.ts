import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatProc } from '../models/catproc';
@Injectable({
  providedIn: 'root'
})
export class CateprocService {

  baseUrl: string = 'xxx';

  constructor(private http: HttpClient) {

  }

  getCatproc() {
    return this.http.get<CatProc[]>(this.baseUrl);
  }

}
