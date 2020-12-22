import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-link-button',
  template: ` <button
    type="button"
    [ngStyle]="{'color':textColor}"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./linkButton.css'],
})
export default class ButtonComponent {

    @Input() label = 'Link Button ';
    @Input() textColor;
    @Input() disabled = true;

    public get classes(): string[] {
        const mode = this.disabled ? 'btn-disabled' : 'btn-link';
        return ['btn', mode];
      }
    
}