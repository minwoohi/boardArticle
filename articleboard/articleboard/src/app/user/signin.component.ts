/**
 * Created by Admin on 2017-05-18.
 */
import {Component} from '@angular/core';
import {User} from "./user";
import {ActivatedRoute, Router} from "@angular/router";
import {Http} from "@angular/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";
import {UserConstant} from "./user.constant";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html'
})
export class SignInComponent{
  user:User = {
    _id: "",
    id: "",
    password: "",
    name: ""
  };

  constructor(private http:Http, private router:Router, private userService:UserService){}

  signIn(signInForm){
    this.userService.checkOneUser(signInForm.form.value)
      .subscribe(response =>{
        if( response.error ){
          alert(response.error);
        }
        else if ( response.result === true ) {
          console.log(response.user);
          // 상수에 사용자 정보 넣어줘 세션 역할 수행할 수 있도록 돕는다.
          // 서버에서 가져온 데이터를 Augular에서 관리하겠다.
          UserConstant.user = response.user;
          this.router.navigate(['']);
        } else {
          alert("아이디 비밀번호가 다릅니다.");
        }
      });

  }

}
