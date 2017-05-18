/**
 * Created by Admin on 2017-05-18.
 */
import {Component} from '@angular/core';
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'signout'
})
export class SignOutComponent{
  user:User = {
    _id: "",
    id: "",
    password: "",
    name: ""
}

  constructor( private http:Http, private router:Router, private userService:UserService){}

}
