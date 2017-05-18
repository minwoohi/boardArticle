/**
 * Created by Admin on 2017-05-17.
 */
import {Component} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service'

@Component({
  selector: 'article-list',
  templateUrl : '../article/article.component.html'
})

export class ArticleComponent {

  articles: Article[];

  constructor(private articleService:ArticleService){}

  ngOnInit(){
    this.articleService.getAllArticles()
      .subscribe(articles => this.articles = articles);
  }

}
