import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-mouse-gradient-overlay',
  imports: [],
  templateUrl: './mouse-gradient-overlay.component.html',
  styleUrl: './mouse-gradient-overlay.component.css'
})
export class MouseGradientOverlayComponent {
  public x: number = 250;
  public y: number = 250;
  public r: number = 250;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
    console.log(this.x, this.y);
  }
}
