import { Routes, RouterModule } from "@angular/router";
import { FrontComponent } from "./pages/front/front.component";
import { FrontGuard } from "./guards/front/front.guard";

const frontRoutes: Routes = [
  { path: "", component: FrontComponent, canActivate: [FrontGuard] }
];

export const FrontRouting = RouterModule.forChild(frontRoutes);
