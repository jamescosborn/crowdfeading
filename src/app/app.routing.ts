import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import {ProjectListComponent } from './project-list/project-list.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'project-list',
    component: ProjectListComponent
  }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
