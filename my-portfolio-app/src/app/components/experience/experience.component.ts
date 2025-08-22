import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public jobs: Record<string, string>[] = [];

  constructor() {
    // TODO: Load Jobs from backend? Service? This is fine for now.

    const job1: Record<string, string> = {
      companyName: "S&C Electric",
      jobTitle: "Operations Technology Engineer",
      description: `
      I work here!
      Second line
      `
    };

    const job2: Record<string, string> = {
      companyName: "S&C Electric",
      jobTitle: "Operations Technology Engineer",
      description: `
      I work here!
      Second line
      `
    };

    const job3: Record<string, string> = {
      companyName: "S&C Electric",
      jobTitle: "Operations Technology Engineer",
      description: `
      I work here!
      Second line
      `
    };

    const job4: Record<string, string> = {
      companyName: "S&C Electric",
      jobTitle: "Operations Technology Engineer",
      description: `
      I work here!
      Second line
      `
    };

    this.jobs.push(job1);
    this.jobs.push(job2);
    this.jobs.push(job3);
    this.jobs.push(job4);
  }
}
