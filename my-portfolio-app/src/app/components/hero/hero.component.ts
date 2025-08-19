import { Component } from '@angular/core';
import { AnimatedPngHolderComponent } from '../animated-png-holder/animated-png-holder.component';

@Component({
  selector: 'app-hero',
  imports: [AnimatedPngHolderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  /* Variables for Sprites */

  getSizeCat(): number {
    const width = window.innerWidth;
    if (width < 480) return 64;
    if (width < 770) return 100;
    return 150;
  }

  getSizeHero(): number {
    const width = window.innerWidth;
    if (width < 480) return 100;
    if (width < 770) return 150;
    return 256;
  }

  machiOverlayImages = [
    { src: 'assets/sprites/Machi/Machi-0.png', class: 'pixelated' },
    { src: 'assets/sprites/Machi/Machi-1.png', class: 'pixelated' },
    { src: 'assets/sprites/Machi/Machi-2.png', class: 'pixelated' },
    { src: 'assets/sprites/Machi/Machi-3.png', class: 'pixelated' },
  ]

  jordanOverlayImages = [
    { src: 'assets/sprites/Jordan/Jordan-0.png', class: 'pixelated' },
    { src: 'assets/sprites/Jordan/Jordan-1.png', class: 'pixelated' }
  ]

  peachOverlayImages = [
    { src: 'assets/sprites/Peach/Peach-0.png', class: 'pixelated' },
    { src: 'assets/sprites/Peach/Peach-1.png', class: 'pixelated' },
    { src: 'assets/sprites/Peach/Peach-2.png', class: 'pixelated' },
    { src: 'assets/sprites/Peach/Peach-3.png', class: 'pixelated' }
  ]
  /* -- */
}
