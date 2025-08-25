import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Job } from '../../models/job';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  public jobs: Job[] = [];
  public expanded: boolean[] = [];
  public totalYearsExp: number = 0;
  private dateTimeFormatOpts: Intl.DateTimeFormatOptions = {
    month: 'short', year: 'numeric'
  };
  get roundedYearsExp(): number { return Math.round(this.totalYearsExp); }
  get msInYear(): number { return (1000 * 60 * 60 * 24 * 365.25); }
  private jobsJson: Job[];

  constructor(private http: HttpClient) {
    // mock up getting data from a service, its what id prob use if i had a db/api
    this.jobsJson = [
      {
        order: 1,
        companyName: "S&C Electric Company",
        jobTitle: "Operations Technology Engineer",
        description: "",
        startDate: new Date("2024-07-01T00:00:00"),
        endDate: new Date(),
        duration: 0,
        current: true
      },
      {
        order: 2,
        companyName: "Plexus Corporation",
        jobTitle: "Manufacturing System Engineer",
        description: "",
        startDate: new Date("2020-06-01T00:00:00"),
        endDate: new Date("2024-07-01T00:00:00"),
        duration: 0,
        current: false
      },
      {
        order: 3,
        companyName: "Husco International Inc.",
        jobTitle: "Advanced Manufacturing Engineer",
        description: "",
        startDate: new Date("2019-04-01T00:00:00"),
        endDate: new Date("2020-06-01T00:00:00"),
        duration: 0,
        current: false
      },
      {
        order: 4,
        companyName: "Greenheck Fan Company",
        jobTitle: "Product Development Coop",
        description: "",
        startDate: new Date("2016-01-01T00:00:00"),
        endDate: new Date("2016-09-01T00:00:00"),
        duration: 0,
        current: false
      }
    ]
  }

  async ngOnInit() {
    for (const job of this.jobsJson) {
      const enrichedJob = await this.enrichJob(job);
      this.jobs.push(enrichedJob);
      this.totalYearsExp += enrichedJob.duration;
    }
    this.expanded = this.jobs.map(() => false); // show more toggle map
  }

  private async enrichJob(data: Job) {
    if (data.endDate == null) {
      data.endDate = new Date();
      data.current = true;
    }
    data.displayStartDate = data.startDate.toLocaleDateString('en-US', this.dateTimeFormatOpts)
    data.displayEndDate = data.endDate.toLocaleDateString('en-US', this.dateTimeFormatOpts)
    const difInMilliSec = Math.abs(data.startDate.getTime() - data.endDate.getTime());
    data.duration = Math.round((difInMilliSec / this.msInYear) * 100) / 100;
    // Id have the api do this in the response. just doing this for now.
    let filename;
    let extension = 'html';
    switch (data.order) {
      case 1:
        filename = 'sandc';
        break;
      case 2:
        filename = 'plexus';
        break;
      case 3:
        filename = 'husco';
        break;
      case 4:
        filename = 'greenheck';
        break;
      default:
        data.description = ""
    }
    data.description = await this.getLocalFileContent(`/text/jobs/${filename}.${extension}`);
    return data;
  }

  private async getLocalFileContent(path: string): Promise<string> {
    const content = await firstValueFrom(this.http.get(path, { responseType: 'text' }));
    return content;
  }

  toggle(index: number): void {
    this.expanded[index] = !this.expanded[index];
  }
}
