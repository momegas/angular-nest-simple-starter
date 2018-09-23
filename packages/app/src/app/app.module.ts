import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { LoginModule } from "./login/login.module";
import { FrontModule } from "./front/front.module";
import { AngularFireModule } from "angularfire2";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from "angularfire2/auth";
import { LoginState } from "./login/store/login.state";

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoginModule,
    FrontModule,
    AppRoutingModule,
    NgxsModule.forRoot([LoginState]),
    NgxsLoggerPluginModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
