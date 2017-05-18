import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {AppRoutingModule} from "./app.routes";
import {ArticleService} from "./article/article.service";
import {DetailComponent} from "./article/detail.component";
import {WriteComponent} from "./article/write.component";
import {ModifyComponent} from "./article/modify.component";
import {UserService} from "./user/user.service";
import {SignInComponent} from "./user/signin.component";
import {SignUpComponent} from "./user/signup.component";


@NgModule({
  declarations: [
    AppComponent, ArticleComponent, DetailComponent, WriteComponent, ModifyComponent, SignInComponent, SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ArticleService, UserService ], // 다른 컴포넌트에서 주입받을 수 있다.
  bootstrap: [AppComponent]
})
export class AppModule { }
