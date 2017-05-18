/**
 * Created by Admin on 2017-05-17.
 */
import {Component} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'modify',
  templateUrl : '../article/modify.component.html'
})
export class ModifyComponent {

  // 객체 초기화
  article:Article = {
    _id: "",
    subject: "",
    content: "",
    writer: "",
    readCount: 0
  };

  //ActivateRoute : 매개변수 받을 수 있도록 돕는 객체, Router : 리다이렉션 돕는 객체
  constructor(private route:ActivatedRoute, private articleService: ArticleService, private router:Router){}


  ngOnInit(){
    // 매개변수 받아올 수 있게 된다. ActiveRoute
    this.route.params.subscribe(params => {
      let id = params['id'];

      // articleService에서 요청하기
      this.articleService.getOneArticle(id)
        .subscribe(article => this.article = article);
    });
  }

  modifyArticle(modifyForm){
    console.log(modifyForm.form.value);
    this.articleService.modifyOneArticle(modifyForm.form.value)
      .subscribe(response => {
        if( response === true ){
          this.router.navigate(['']);
        }
      });
  }

}
