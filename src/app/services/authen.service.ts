import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  baseUrl: string = 'xxx';

  constructor(private http: HttpClient) { }

  userAuthen(data) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.baseUrl + "cmd=login";
      this.http.post(apiURL, data)
        .toPromise()
        .then(
          res => { // Success
            console.log(res);
            resolve(data);
          }
        );
    });
    return promise;
  }

}
