import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public jobs: Record<string, string>[] = [];
  public expanded: boolean[] = [];
  public totalYearsExp: number = 0;

  constructor(private http: HttpClient) {
    // TODO: Load Jobs from backend? Service? This is fine for now.
    const dateTimeFormatOpts: Intl.DateTimeFormatOptions = {
      month: 'short', year: 'numeric'
    };

    this.http.get('text/jobs/sandc.txt', { responseType: 'text' })
      .subscribe(data => {
        const startDate: Date = new Date("2024-07-01T00:00:00");
        const endDate: Date = new Date();
        const difInMilliSec = Math.abs(startDate.getTime() - endDate.getTime());
        const msInYear = 1000 * 60 * 60 * 24 * 365.25;
        var jobDuration: number = Math.round((difInMilliSec / msInYear) * 100) / 100;

        const job: Record<string, any> = {
          companyName: "S&C Electric Company",
          jobTitle: "Operations Technology Engineer",
          description: data,
          startDate: startDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          endDate: endDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          duration: jobDuration,
          current: true
        };
        this.jobs.push(job)
        this.totalYearsExp += jobDuration;
      })

    this.http.get('text/jobs/plexus.txt', { responseType: 'text' })
      .subscribe(data => {
        const startDate: Date = new Date("2020-06-01T00:00:00");
        const endDate: Date = new Date("2024-07-01T00:00:00");
        const difInMilliSec = Math.abs(startDate.getTime() - endDate.getTime());
        const msInYear = 1000 * 60 * 60 * 24 * 365.25;
        var jobDuration: number = Math.round((difInMilliSec / msInYear) * 100) / 100;

        const job: Record<string, any> = {
          companyName: "Plexus Corporation",
          jobTitle: "Manufacturing System Engineer",
          description: data,
          startDate: startDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          endDate: endDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          duration: jobDuration,
          current: false
        };
        this.jobs.push(job);
        this.totalYearsExp += jobDuration;
      })

    this.http.get('text/jobs/husco.txt', { responseType: 'text' })
      .subscribe(data => {
        const startDate: Date = new Date("2019-04-01T00:00:00");
        const endDate: Date = new Date("2020-06-01T00:00:00");
        const difInMilliSec = Math.abs(startDate.getTime() - endDate.getTime());
        const msInYear = 1000 * 60 * 60 * 24 * 365.25;
        var jobDuration: number = Math.round((difInMilliSec / msInYear) * 100) / 100;

        const job: Record<string, any> = {
          companyName: "Husco International Inc.",
          jobTitle: "Advanced Manufacturing Engineer",
          description: data,
          startDate: startDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          endDate: endDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          duration: jobDuration,
          current: false
        };
        this.jobs.push(job)
        this.totalYearsExp += jobDuration;
      })

    this.http.get('text/jobs/greenheck.txt', { responseType: 'text' })
      .subscribe(data => {
        const startDate: Date = new Date("2016-01-01T00:00:00");
        const endDate: Date = new Date("2016-09-01T00:00:00");
        const difInMilliSec = Math.abs(startDate.getTime() - endDate.getTime());
        const msInYear = 1000 * 60 * 60 * 24 * 365.25;
        var jobDuration: number = Math.round((difInMilliSec / msInYear) * 100) / 100;

        const job: Record<string, any> = {
          companyName: "Greenheck Fan Company",
          jobTitle: "Product Development Coop",
          description: data,
          startDate: startDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          endDate: endDate.toLocaleDateString('en-US', dateTimeFormatOpts),
          duration: jobDuration,
          current: false
        };
        this.jobs.push(job)
        this.totalYearsExp += jobDuration;
      })

    // Calculate total experience in years
    // this will be 0 b/c async http calls. cheated and just put calc in async method
    // this.totalYearsExp += Number(job["duration"])

    //this.jobs.push(job1, job2, job3, job4)
    this.expanded = this.jobs.map(() => false); // show more toggle map
  }

  toggle(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }

  get roundedYearsExp(): number {
    return Math.round(this.totalYearsExp);
  }

}
