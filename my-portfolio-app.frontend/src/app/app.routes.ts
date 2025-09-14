import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { LearnMoreComponent } from './components/learn-more/learn-more.component';


const routeConfig: Routes = [
    { path: '', component: HomeComponent, title: 'Portfolio home' },
    { path: 'all-projects', component: AllProjectsComponent, title: 'All projects' },
    { path: 'learn-more', component: LearnMoreComponent, title: 'Learn more' }
];

export default routeConfig;