import { Injectable } from '@angular/core';
import * as Constants from '../../config/constants';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppRequestService {
menu:any;


token = (window.localStorage.getItem('token') == null) ? '' : window.localStorage.getItem('token');
config = {
  headers : {
    'Content-Type'  : 'application/json',
    'Authorization' : 'Bearer ' + this.token,
  }
};

config_headers = {
  headers : {
    'Content-Type'  : 'application/json',
    'Authorization' :  this.token,
  }
};

constructor(public http: HttpClient, public router: Router) { this.menu = false; }

getRequest(pageUrl) {
  return new Promise((resolve, reject) => {
    this.http.get(Constants.AppConst.API_END_POINT + pageUrl, this.config_headers).subscribe(data => {
      resolve(data);
    }, err => {
     
      reject(err);

    });
  });  
}

onLoggedout() {
  window.localStorage.clear();
  localStorage.removeItem('isLoggedin');  
  this.router.navigate(['/']);
  // location.reload()
  window.location.href = "/home";
  // this.menu = true;
  // console.log(this.menu);
 }


postRequest(pageUrl, data) {
  
      return new Promise((resolve, reject) => {
  
        this.http.post(Constants.AppConst.API_END_POINT + pageUrl, data, this.config_headers).subscribe( data => {
          resolve(data);
        }, err => {
      
          reject(err);
  
        });
      });
}

putRequest(pageUrl, data) {
  
      return new Promise((resolve, reject) => {
  
        this.http.put(Constants.AppConst.API_END_POINT + pageUrl, data, this.config_headers).subscribe( data => {
          resolve(data);
        }, err => {
      
          reject(err);
  
        });
      });
}

postFileRequest(pageUrl,data){
  console.log(this.token);
  return new Promise((resolve,reject) => {

      this.http.post(Constants.AppConst.API_END_POINT+pageUrl, data,  {
          headers : {
              'Authorization' : this.token
//'enctype' : 'multipart/form-data'
          }
      }).subscribe(data => {
          resolve(data);
      }, err => {

          reject(err);

      });
  });
}
}
