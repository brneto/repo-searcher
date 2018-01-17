import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import uibootstrap from 'angular-ui-bootstrap';

import {routing} from './app.config';
import {GithubService} from './service/github.service';
import {RepoDetailsComponent} from './repository/repo-details.component';
import {UserDetailsComponent} from './user/user-details.component';
import {UserSearcherComponent} from './user/user-searcher.component';

angular.module('githubViewer',[uirouter, uibootstrap])
  .config(routing)
  .service('githubService', GithubService)
  .component('repodetails', RepoDetailsComponent)
  .component('userdetails', UserDetailsComponent)
  .component('usersearcher',UserSearcherComponent);


// References:
// http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
// https://medium.com/@zamarrowski/angular-1-x-component-based-application-with-webpack-and-es6-dfab450f2df4
// https://stackoverflow.com/questions/28620479/using-es6-classes-as-angular-1-x-directives/28634429#28634429
// https://www.michaelbromley.co.uk/blog/exploring-es6-classes-in-angularjs-1.x/

