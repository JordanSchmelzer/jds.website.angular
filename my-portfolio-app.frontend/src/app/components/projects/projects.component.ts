import { Component } from '@angular/core';
import { ProjectFlipCardComponent } from './project-flip-card/project-flip-card.component';


@Component({
  selector: 'app-projects',
  imports: [ProjectFlipCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public pacmanCloneProj: string = "/assets/projects/";
  public pacmanCloneRepo: string = "";

  public neovimProj: string = "/assets/projects/";
  public neovimRepo: string = "";

  public aiChessProj: string = "/assets/projects/";
  public aiChessRepo: string = "";

  public discordBotProj: string = "/assets/projects/";
  public discordBotRepo: string = "";

  public oldWebsiteProj: string = "/assets/projects/";
  public oldWebsiteRepo: string = "";

  public firstWebsiteProj: string = "/assets/projects/first-website.png";
  public firstWebsiteRepo: string = "";

  constructor() { }

}
