import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonWorksheetService {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  reloadComponent = () => {
    this.router.onSameUrlNavigation = 'reload';
    const url = this.route.snapshot['_routerState'].url;
    this.router.navigate([`${url}`])
  };
}
