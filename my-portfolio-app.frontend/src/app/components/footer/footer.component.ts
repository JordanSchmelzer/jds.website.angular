import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactForm = new FormGroup({
    fname: new FormControl(''),
    femail: new FormControl('')
  });

  contactService: ContactService = inject(ContactService);

  constructor() { }

  submitContactForm() {
    this.contactService.submitContactForm(
      this.contactForm.value.fname ?? '',
      this.contactForm.value.femail ?? ''
    )
  }


  clearForm(form: NgForm) {
    form.resetForm()
    console.log("Contact form cleared.")
  }
}
