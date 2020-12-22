import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-checkbox',
  template: `
  <div class="form-check" >
  <input  type="checkbox"  [ngClass]="classes" value="" disabled>
  <label>
  {{ label }}
  </label>
  </div>
  <div class="form-check" >
  <input  type="checkbox"  [ngClass]="class" value="" >
  <label>
  {{ label }}
  </label>
  </div>
  `,
  styleUrls: ['./checkbox.css'],
})
export default class ButtonComponent {
    @Input() label = 'Checkbox';
    @Input() primary = false;
    @Input() disabled = true;


    public get classes(): string[] {
        const mode = this.primary ? 'btn-primary' : 'btn-secondary';
        const disble = this.disabled ? 'disabled' : '';

        return ['form-check-input', mode, disble];
      }

      public get class(): string[] {
        const mode = this.primary ? 'btn-primary' : 'btn-secondary';
       

        return ['form-check-input', mode];
      }

      
}

