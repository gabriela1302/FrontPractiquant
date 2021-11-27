import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudpostulacion',
  templateUrl: './crudpostulacion.component.html',
  styleUrls: ['./crudpostulacion.component.css']
})
export class CrudpostulacionComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
