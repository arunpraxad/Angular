import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  subtitle = 'Oh oh !!!';

  constructor(private userService: UserService) {
    this.subtitle = userService.userName;
  }
}
