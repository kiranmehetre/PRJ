import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(router:Router,private ng4LoadingSpinnerService :Ng4LoadingSpinnerService) {
        router.events.subscribe(e => {
            if(e instanceof NavigationStart) {
            this.ng4LoadingSpinnerService.show();
            }
    
            if(e instanceof NavigationEnd) {
                setTimeout(() => {
                this.ng4LoadingSpinnerService.hide();
                    
                }, 2000);
            }
          });
    }

    ngOnInit() {
       
    }


}
