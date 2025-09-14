import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-all-projects',
  imports: [ProjectsComponent],
  template: `
  <app-projects></app-projects>
  `,
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {

}
