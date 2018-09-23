import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { Logout } from "../../../login/store/login.actions";

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(Logout);
  }

}
