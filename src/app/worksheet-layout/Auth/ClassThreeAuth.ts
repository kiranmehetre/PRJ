import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ClassThreeAuth implements CanActivate {
    constructor(
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let profile_pic = JSON.parse(localStorage.getItem('user'));
        if (profile_pic) {
            let Grades = profile_pic[0].class.split(',', 3);
            if (Grades) {
                let gradeOne = Grades.includes("3");
                if (gradeOne) {
                    return true;
                }
            }
        }
        this.router.navigate(['/home']);
        return false;
    }
}