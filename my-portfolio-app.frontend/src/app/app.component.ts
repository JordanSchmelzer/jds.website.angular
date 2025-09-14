import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MouseGradientOverlayComponent } from './components/mouse-gradient-overlay/mouse-gradient-overlay.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  template: `
  <app-mouse-gradient-overlay></app-mouse-gradient-overlay>
  <app-header></app-header>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  `,
  styleUrl: './app.component.css',
  imports: [
    MouseGradientOverlayComponent,
    HeaderComponent,
    RouterModule,
    FooterComponent,
  ]
})
export class AppComponent {
  title = 'my-portfolio-app';
}
