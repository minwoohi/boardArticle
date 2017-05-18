/**
 * Created by Admin on 2017-05-17.
 */
import {Component} from '@angular/core';
import {Article} from './article';
import {ArticleService} from "./article.service";
import { Http } from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';

@Component({
  selector: 'detail',
  templateUrl: '../article/detail.component.html'
})

export class DetailComponent {
  article:Article = {
      _id: "",
    subject: "",
    content: "",
    writer: "",
    readCount: 0
  };

  // 매개변수 받기 위해 ActivatedRoute 필요~
  constructor(private route:ActivatedRoute, private articleService:ArticleService, private http:Http, private router:Router){}

  // 컴포넌트가 초기화되었을 때 수행됨. 이전에 템플릿 수행(html)
  // Article 객체화 수행해야 문제가 없다.

  ngOnInit(){
    // 매개변수 받아올 수 있게 된다.
    this.route.params.subscribe(params => {
      let id = params['id'];

      // articleService에서 요청하기
      this.articleService.getOneArticle(id)
        .subscribe(article => this.article = article);
    });
  }

  deleteArticle(id: string){
    this.articleService.deleteOneArticle(id)
      .subscribe(response => {
        if(response === true ){
          this.router.navigate(['']);
        }
      });
  }

}
