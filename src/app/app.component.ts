import { Component, OnInit } from '@angular/core';
import { TokenService } from './service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PRACTIQUANT';isLogged = false;
  
  nombreUsuario = '';

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}