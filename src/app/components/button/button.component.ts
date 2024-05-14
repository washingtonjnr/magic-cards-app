import { Component, Input } from '@angular/core';
// Components
import { LoadingComponent } from "../loading/loading.component";
import { CommonModule } from '@angular/common';

type ButtonTypes = "submit" | "button" | "reset"
type ButtonVariants = "danger" | "ghost" | "primary" | "outline-primary"

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() type: ButtonTypes = "submit";
  @Input() variants: ButtonVariants = "primary";
  //
  @Input() isLoading: boolean = false;
  @Input() isDisabled: boolean = false;
}
