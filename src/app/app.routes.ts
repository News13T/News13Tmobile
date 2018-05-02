import { Routes } from '@angular/router';

import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { UserComponent } from '../pages/user/user.component';
import { RegisterComponent } from '../pages/register/register.component';
import { UserResolver } from '../pages/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { SportsComponent } from '../pages/sports/sports.component';
import { CommercesComponent } from '../pages/commerces/commerces.component';
import { EvenementsComponent } from '../pages/evenements/evenements.component';
import { InformationsComponent } from '../pages/informations/informations.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'home', component: HomeComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'evenements', component: EvenementsComponent},
  { path: 'commerces', component: CommercesComponent},
  { path: 'informations', component: InformationsComponent}
  //{ path: 'menu', component: RegisterComponent, canActivate: [AuthGuard] },
];
