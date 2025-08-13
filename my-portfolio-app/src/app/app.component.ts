import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from "./components/skills/skills.component";


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent
  ]
})
export class AppComponent {
  title = 'my-portfolio-app';
}
