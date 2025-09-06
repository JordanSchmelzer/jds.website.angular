import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  public i: number = 12;

  public range(): number[] {
    return Array.from({ length: this.i }, (_, index) => index);
  }

}
