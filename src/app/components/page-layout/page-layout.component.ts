import { Component } from '@angular/core';
// Components
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    HeaderComponent,
  ],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {

}
