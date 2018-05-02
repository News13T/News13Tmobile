import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { UserComponent } from '../pages/user/user.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { UserResolver } from '../pages/user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { rootRouterConfig } from './app.routes';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SportsComponent } from '../pages/sports/sports.component';
import { CommercesComponent } from '../pages/commerces/commerces.component';
import { EvenementsComponent } from '../pages/evenements/evenements.component';
import { InformationsComponent } from '../pages/informations/informations.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomePage,
    //ListPage,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    SportsComponent,
    CommercesComponent,
    EvenementsComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(AppComponent),
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    //HomePage,
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService, 
    UserService, 
    UserResolver, 
    AuthGuard,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
