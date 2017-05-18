import { Component } from '@angular/core';
import {UserConstant} from "./user/user.constant";
import {UserService} from "./user/user.service";
import {User} from "./user/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor( private userService:UserService){}

  getUser(): UserConstant{
    return UserConstant.user;
  }

  signOut() {
    return  UserConstant.user = {
      _id: '',

    // 저장할 멤버
    id: '',
    password: '',
    name: ''
    };

  }

}
