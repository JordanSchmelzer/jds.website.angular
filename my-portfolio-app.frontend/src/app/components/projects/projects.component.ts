import { Component } from '@angular/core';
import { ProjectFlipCardComponent } from './project-flip-card/project-flip-card.component';


@Component({
  selector: 'app-projects',
  imports: [ProjectFlipCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor() { }

  // Angular portfolio
  project1Description = `
  See the project code, structure, previous revisions, and Figma templates that make up what you're interacting with.
  Click the link to view the repo's readme, history, and future development goals.
  `;

  // Pygame Pac-Man
  project2Description = `
  Fork a copy of my Pac-Man clone with familiar ghost AI, sound effects, and joystick support. 
  This is the kind of program you could run on a Raspberry Pi and mount in an arcade style games cabinet.
  This project showcases multimedia development and external sensor integration in Python.
  `;

  // Discord Music Bot
  project3Description = `
  Discord is a popular online voice chat service used for buisiness and recreation alike.
  Discord's public API makes creating bots like those in this project possible. I had a need for a music streaming bot, but couldn't find
  one on the market. So I made and self hosted my own! 
  Click the link to check out one of my most favorite services I've ever built.
  `;

  // C# Console Chess
  project4Description = `
  Creating a chess game is one of my favorite ways to learn a language.
  Console Chess is a hybrid project of learning C# and an art project. I also find the best art is made with a limited pallet.
  Creating a chess game with custom assets using nothing but the Windows terminal was quite embodies that.
  Click the link to check out the repo for yourself.
  `;

  // Neovim Config
  project5Description = `
  Neovim is a highly efficient and customizable text editor. Like Visual Studio, it's used to write code.
  To get the most out of the software Neovim expects you to read the docs and configure it using Lua.
  While I ultimately find Visual Studio and the commandline the best for my workflows, I'm also proud of the config I created.
  Click the link to see how I use Neovim.
  `;
}
