import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AnimatedPngHolderComponent } from '../animated-png-holder/animated-png-holder.component';

import { DtoJob } from '../../shared/dtos/dtoJob';
import { JobsService } from '../../services/jobs.service';


@Component({
  selector: 'app-experience',
  imports: [CommonModule, AnimatedPngHolderComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  public jobs: DtoJob[] = [];
  public expanded: boolean[] = [];
  public totalYearsExp: number = 0;
  private dateTimeFormatOpts: Intl.DateTimeFormatOptions = {
    month: 'short', year: 'numeric'
  };
  get roundedYearsExp(): number { return Math.round(this.totalYearsExp); }
  get msInYear(): number { return (1000 * 60 * 60 * 24 * 365.25); }
  public businessMachi: any[] = []
  public businessPeach: any[] = []

  jobsList: DtoJob[] = []
  jobsService: JobsService = inject(JobsService)

  constructor(private http: HttpClient) {

    this.jobsService.getAllJobs().then((jobsList: DtoJob[]) => {
      this.jobsList = jobsList;
    })


    // mock up getting data from a service, its what id prob use if i had a db/api
    this.businessMachi = [
      { src: 'assets/sprites/Business-Machi/Business-Machi-0.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Machi/Business-Machi-1.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Machi/Business-Machi-2.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Machi/Business-Machi-3.png', class: 'pixelated' }
    ]

    this.businessPeach = [
      { src: 'assets/sprites/Business-Peach/Business-Peach-0.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Peach/Business-Peach-1.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Peach/Business-Peach-2.png', class: 'pixelated' },
      { src: 'assets/sprites/Business-Peach/Business-Peach-3.png', class: 'pixelated' },
    ]
  }

  getSizeCat(): number {
    const width = window.innerWidth;
    if (width < 480) return 64;
    if (width < 770) return 100;
    return 150;
  }

  async ngOnInit() {
    for (const job of []) {
      const enrichedJob = await this.enrichJob(job);
      this.jobs.push(enrichedJob);
      this.totalYearsExp += enrichedJob.duration;
    }
    this.expanded = this.jobs.map(() => false); // show more toggle map
  }

  private async enrichJob(data: DtoJob) {
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
