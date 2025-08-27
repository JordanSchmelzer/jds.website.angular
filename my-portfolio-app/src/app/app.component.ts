import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    SkillsComponent,
    ExperienceComponent,
    HeroComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'my-portfolio-app';
}
