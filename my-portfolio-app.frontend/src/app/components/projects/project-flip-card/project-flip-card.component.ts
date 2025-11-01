import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-flip-card',
  imports: [],
  templateUrl: './project-flip-card.component.html',
  styleUrl: './project-flip-card.component.css'
})
export class ProjectFlipCardComponent {
  @Input() projectThumbnail: string = '';
  @Input() projectThumbnailAlt: string = '';
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectLink: string = '';
}
