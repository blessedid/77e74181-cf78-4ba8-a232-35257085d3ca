import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log(next, state);
    const auth = this.authService.check();
    const path = (next.url.length > 0) ? next.url[0].path : '';

    if ((path === 'login' || path === '') && auth) {
      this.router.navigateByUrl((next.params.to) ? next.params.to : '/dashboard');
      return false;
    }

    if (path === '' && !auth) {
      return true;
    }

    if (!auth && (path !== 'login')) {
      const url = this.router.createUrlTree(['/login', (state.url !== '/login') ? {to: state.url} : {}]);
      this.router.navigateByUrl(url);
    } else if (!auth && path === 'login') {
      return true;
    }

    return auth;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
