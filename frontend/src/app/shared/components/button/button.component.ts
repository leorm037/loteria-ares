import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

export type ButtonType = "button" | "submit" | "reset";
export type ActionType = "btn-primary" | "btn-secondary" | "btn-outline-secondary" | "btn-link" | "dropdown-item";

@Component({
  selector: 'app-button',
  imports: [NgClass, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
  public name = input<string | null>(null);
  public iconClassCss = input<string>();
  public buttonType = input<ButtonType | null>(null);
  public actionType = input<ActionType>();
  public link = input<string>();

  public clickOutput = output<void>();

  get effectiveActionType(): string {
    if(this.actionType() === "dropdown-item") {
      return "dropdown-item";
    }
    
    return `btn bg-gradient btn-sm shadow ${this.actionType()}`;
  }

  public onClick(): void {
    this.clickOutput.emit();
  }

}
