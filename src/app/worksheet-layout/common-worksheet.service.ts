import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonWorksheetService {

  constructor(
    private router: Router
  ) { }

  reloadComponent(router?: any) {
    this.router.onSameUrlNavigation = 'reload';
    let urldata = this.router.url.split("/worksheet-layout/");
    this.router.navigate([`worksheet-layout/${urldata[1]}`])
  };

  reuseRoute(router?: any) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });

  }
}
