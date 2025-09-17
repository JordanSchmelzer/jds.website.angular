import { Injectable } from '@angular/core';

import { DtoJob } from '../shared/dtos/dtoJob';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JobsService {
  protected jordansJobsList: DtoJob[] = [
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

  //url = `${environment.apiUrl}/career/jobs`
  public url: string = environment.apiUrl

  constructor() {
  }

  async getAllJobs(): Promise<DtoJob[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getJobByOrder(order: Number): Promise<DtoJob | undefined> {
    const data = await fetch(`${this.url}/${order}`);
    return await data.json() ?? {};
  }
}
