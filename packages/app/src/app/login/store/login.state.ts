import {
  State,
  Selector,
  Action,
  NgxsOnInit,
  Store,
  StateContext
} from "@ngxs/store";
import { GithubService } from "../services/github.service";
import * as actions from "./login.actions";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

export interface LoginStateModel {
  user: firebase.User;
}

@State<LoginStateModel>({
  name: "login",
  defaults: { user: null }
})
export class LoginState implements NgxsOnInit {
  constructor(
    private githubService: GithubService,
    private store: Store,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngxsOnInit() {
    this.afAuth.user.subscribe(async (user: firebase.User) => {
      if (user) {
        this.router.navigateByUrl("");
      }
      else {
        this.router.navigateByUrl("/login");
      }
      this.store.dispatch(new actions.SetUser(user));
    });
  }

  @Selector()
  static user(state: LoginStateModel): firebase.User {
    return state.user;
  }

  @Action(actions.SetUser)
  setUser(ctx: StateContext<LoginStateModel>, { user }: actions.SetUser): void {
    ctx.patchState({ user });
  }

  @Action(actions.Logout)
  logout(ctx: StateContext<LoginStateModel>): void {
    return this.githubService.logout();
  }

  @Action(actions.Login)
  login(ctx: StateContext<LoginStateModel>): void {
    return this.githubService.login();
  }
}
