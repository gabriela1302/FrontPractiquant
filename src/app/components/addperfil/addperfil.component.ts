import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addperfil',
  templateUrl: './addperfil.component.html',
  styleUrls: ['./addperfil.component.css']
})
export class AddperfilComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
