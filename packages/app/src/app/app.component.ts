import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { LoginState } from "./login/store/login.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Angular Nest Simple Starter";

  // Selectors
  @Select(LoginState.user)
  user: Observable<firebase.User>;
}
