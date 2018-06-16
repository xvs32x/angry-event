import { Routes } from '@angular/router';
import { ProjectListComponent } from './modules/project/components/project-list.components';
import { DemoComponent } from './modules/demo/components/demo.component';
import { AuthComponent } from './modules/auth/components/auth.component';

export const routes: Routes = [
  { path: '', component: DemoComponent },
  { path: 'auth', component: AuthComponent }
];
