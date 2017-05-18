/**
 * Created by Admin on 2017-05-18.
 */
import {Component} from '@angular/core';
import {User} from "./user";
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent{
  user:User = {
  _id: "",
   id: "",
   password: "",
   name: ""
};

  constructor(private route:ActivatedRoute, private http:Http, private router:Router, private userService:UserService){}

  signUp(signUpForm){
    console.log(signUpForm.form.value.id);
    console.log(signUpForm.form.value.password);
    console.log(signUpForm.form.value.name);
    this.userService.insertNewUser(signUpForm.form.value)
      .subscribe(response =>{
        if ( response === true ){
          this.router.navigate(['/signin']);
        }
      });

  }

}
