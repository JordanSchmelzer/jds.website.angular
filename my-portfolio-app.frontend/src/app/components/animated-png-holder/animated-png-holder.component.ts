import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-animated-png-holder',
  imports: [CommonModule],
  templateUrl: './animated-png-holder.component.html',
  styleUrl: './animated-png-holder.component.css'
})
export class AnimatedPngHolderComponent {
  overlayImagesIndex = 0;
  private overlayInterval: any;

  backgroundImagesIndex = 0;
  private backgroundInterval: any;

  @Input() backgroundImages?: { src: string; class?: string }[];
  @Input() overlayImages: { src: string; class?: string }[] = [];
  @Input() noImagesTest?: string = "";
  @Input() overlayImageSize = 16;


  ngOnInit() {
    if (this.overlayImages?.length) {
      this.overlayInterval = setInterval(() => {
        this.overlayImagesIndex =
          (this.overlayImagesIndex + 1) % this.overlayImages.length;
      }, 400); // Adjust speed as needed
    }
  }

  ngOnDestroy() {
    if (this.overlayInterval) {
      clearInterval(this.overlayInterval);
    }
  }
}
