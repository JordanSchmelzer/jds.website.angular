import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';


@Component({
  selector: 'app-learn-more',
  imports: [ExperienceComponent, SkillsComponent],
  template: `
    <app-skills></app-skills>
  `,
  styleUrl: './learn-more.component.css'
})
export class LearnMoreComponent {

}
