import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addpostulacion',
  templateUrl: './addpostulacion.component.html',
  styleUrls: ['./addpostulacion.component.css']
})
export class AddpostulacionComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
