import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public languageSkills: string[] = [
    'HTML', 'CSS', 'TYPESCRIPT', 'SQL', 'C#',
    'PYTHON', 'VB', 'JAVASCRIPT', 'DAX', 'LUA',
    'BASH', 'LADDER LOGIC', 'ANGULAR'
  ]

  public softwareSkills: string[] = [
    'LINUX', 'MYSQL', 'DB DESIGN', 'xUNIT', 'EF CORE',
    'GIT', 'MSSQL', 'TKINTER', '.NET CORE', 'ASP.NET',
    'IoT', 'REST API', 'PIXEL ART'
  ]

  public manufacturingSkills: string[] = [
    'MANUFACTURING', '6 SIGMA', 'MES DEVELOPER', 'LEAN', 'ENGINEERING SYSTEMS',
    'TOOL DESIGN', 'AME', 'INDUSTRIAL AUTOMATION', 'CAD', 'SOLIDWORKS',
    'OpEx', 'ORACLE', 'JDE'
  ]

  constructor() { }

}
