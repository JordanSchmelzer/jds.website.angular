import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = environment.apiUrl;

  constructor() { }

  async submitContactForm(fname: string, femail: string): Promise<undefined> {
    console.log(`Contact form submitted: name ${fname} email: ${femail} `);
    const data = await fetch(environment.apiUrl);
    return await data.json();
  }
}
