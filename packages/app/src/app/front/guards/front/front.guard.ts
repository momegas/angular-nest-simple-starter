import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { Store } from "@ngxs/store";
import { LoginState } from "../../../login/store/login.state";

@Injectable({
  providedIn: "root"
})
export class FrontGuard implements CanActivate {

  constructor(private router: Router, private store: Store) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.store.selectSnapshot(LoginState.user);
    if (user) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
