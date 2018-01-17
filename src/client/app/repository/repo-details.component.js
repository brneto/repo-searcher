import {RepoDetailsController} from './repo-details.controller';
import RepoDetailsHtml from './repo-details.html';


export const RepoDetailsComponent =  {
  // one-way input binding, e.g.,
  // <repodetails repo="$ctrl.repo"></repodetails>
  // automatically bound to `repo` on the controller
  bindings: {repo: '<'},
  controller: RepoDetailsController,
  controllerAs: 'vm',
  template: RepoDetailsHtml
};
