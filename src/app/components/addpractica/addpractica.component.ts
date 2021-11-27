import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addpractica',
  templateUrl: './addpractica.component.html',
  styleUrls: ['./addpractica.component.css']
})
export class AddpracticaComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
