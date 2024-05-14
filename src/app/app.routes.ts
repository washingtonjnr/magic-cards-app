import { Routes } from '@angular/router';
// Pages
import { HomeComponent } from "../app/pages/home/home.component";
import { PackComponent } from "../app/pages/pack/pack.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pack/:id",
    component: PackComponent,
  }
];
