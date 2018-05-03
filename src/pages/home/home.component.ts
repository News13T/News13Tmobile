import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/core/auth.service'
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['/src/app/pages/home/home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.router.navigateByUrl("/login");
    }, (error) => {
      console.log("Logout error", error);
    });
  }

}
