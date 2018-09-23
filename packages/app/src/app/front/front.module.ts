import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FrontComponent } from "./pages/front/front.component";
import { FrontRouting } from "./front.routing";
import { MatButtonModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, FrontRouting, MatButtonModule],
  declarations: [FrontComponent]
})
export class FrontModule {}
