/**
 * Created by Admin on 2017-05-17.
 */
import { Component } from '@angular/core';
import {ArticleService} from "./article.service";
import {Router} from "@angular/router";
@Component({
  selector: 'write',
  templateUrl: '../article/write.component.html'
}) // form 데이터를 노드로 전송
export class WriteComponent {

  constructor(private articleService: ArticleService, private router:Router){}

  // Submit 버튼 클릭시 페이지 이동 아닌 writeArticle 수행
  writeArticle(writeForm){
    this.articleService.insertNewArticle(writeForm.form.value)
      .subscribe(response => {
        if( response === true ){
          // Response.sendRedirect("/");
          this.router.navigate(['']);
        }
      });
  }

}
