/**
 * Created by Admin on 2017-05-17.
 */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import {DetailComponent} from "./article/detail.component";
import {WriteComponent} from "./article/write.component";
import {ModifyComponent} from "./article/modify.component";
import {SignUpComponent} from "./user/signup.component";
import {SignInComponent} from "./user/signin.component";

export const ROUTES:Routes = [
  {path: '', component: ArticleComponent}, // url에 해당하는 Component
  {path: 'article/:id', component: DetailComponent},
  {path: 'write', component: WriteComponent},
  {path: 'modify/:id', component: ModifyComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent}
  ];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(ROUTES);
