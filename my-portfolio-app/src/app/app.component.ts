import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from './components/footer/footer.component';
import { MouseGradientOverlayComponent } from './components/mouse-gradient-overlay/mouse-gradient-overlay.component';
import { ExampleComponent } from './components/example/example.component';

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
    FooterComponent,
    ProjectsComponent,
    MouseGradientOverlayComponent,
    ExampleComponent
  ]
})
export class AppComponent {
  title = 'my-portfolio-app';
}
