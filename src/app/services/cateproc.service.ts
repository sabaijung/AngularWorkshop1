import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatProc } from '../models/catproc';
@Injectable({
  providedIn: 'root'
})
export class CateprocService {

  baseUrl: string = 'http://localhost/6.API/5.api_ranger/crud_catproc.php?cmd=select';

  constructor(private http: HttpClient) {

  }

  getCatproc() {
    return this.http.get<CatProc[]>(this.baseUrl);
  }

}
