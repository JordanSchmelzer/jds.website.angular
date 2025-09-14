import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ProjectsComponent],
  template: `
    <app-hero></app-hero>
    <app-projects></app-projects>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
