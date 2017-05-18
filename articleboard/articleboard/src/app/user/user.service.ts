/**
 * Created by Admin on 2017-05-17.
 */
// 외부에서 주입되어야 하기 때문에 Injectable 필요
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {getResponseURL} from "@angular/http/src/http_utils";
import {User} from "./user";

@Injectable()
export class UserService { // DAO 역할. 데이터를 받아옴
  constructor(private http: Http){}
    // 생성자 private : 멤버변수 역할 할 수 있게 됨 -> this.http 사용 가능!

  insertNewUser(newUser:User): Observable<any>{
    const header = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded");

    return this.http.post('http://localhost:3000/user/signup', `id=${newUser.id}&password=${newUser.password}&name=${newUser.name}`
      , {headers: header}).map(response => <any> response.json().result);
    // result : server.js의 Post 요청 응답 json 멤버
  }

  checkOneUser(user:User): Observable<any>{
    const header = new Headers();
    header.append("Content-Type", "application/x-www-form-urlencoded");

    return this.http.post('http://localhost:3000/user/signin', `id=${user.id}&password=${user.password}`
      , {headers: header}).map(response => <any> response.json());
  }
}
