/**
 * Created by Admin on 2017-05-17.
 */
// 외부에서 주입되어야 하기 때문에 Injectable 필요
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Article } from './article';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {getResponseURL} from "@angular/http/src/http_utils";

@Injectable()
export class ArticleService { // DAO 역할. 데이터를 받아옴
  constructor(private http: Http){}
    // 생성자 private : 멤버변수 역할 할 수 있게 됨 -> this.http 사용 가능!
    getAllArticles(): Observable<Article[]>{
      // 데이터 받아오는 방법 정의
      // get(데이터 받아올 url)
      return this.http.get("http://localhost:3000/articles")
        .map(response => <Article[]> response.json());
    }

    getOneArticle(id: string): Observable<Article>{
      return this.http.get("http://localhost:3000/article/"+ id)
        .map(response => <Article> response.json());
    }

    // 포스트 요청
    insertNewArticle(newArticle:Article): Observable<boolean>{
      const header = new Headers();
      header.append("Content-Type", "application/x-www-form-urlencoded");

      return this.http.post('http://localhost:3000/article', `subject=${newArticle.subject}&content=${newArticle.content}&writer=${newArticle.writer}`
        , {headers: header}).map(response => <boolean> response.json().result);
      // result : server.js의 Post 요청 응답 json 멤버
    }

    modifyOneArticle(article:Article): Observable<boolean> {
      let id = article._id;

      const header = new Headers();
      header.append("Content-Type", "application/x-www-form-urlencoded");

      return this.http.put('http://localhost:3000/article/' + id, `subject=${article.subject}&content=${article.content}&writer=${article.writer}`
      , {headers: header}).map(response => <boolean> response.json().result);
    }


   deleteOneArticle(id: string):Observable<boolean>{
      return this.http.delete('http://localhost:3000/article/'+id).map(response => <boolean> response.json().result);
    }
}
