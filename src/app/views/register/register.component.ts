import { Component } from '@angular/core';
//Service
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor(public authService: AuthService) { }

}
