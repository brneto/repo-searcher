import {UserDetailsController} from './user-details.controller';
import UserDetailsHtml from './user-details.html';

export const UserDetailsComponent =  {
  // one-way input binding, e.g.,
  // <userdetails user="$parentCtrl.userlist"></userdetails>
  // automatically bound to `users` on the controller
  bindings: {
    user: '<',
    repos: '<'
  },
  controller: UserDetailsController,
  controllerAs: 'vm',
  template: UserDetailsHtml
};
