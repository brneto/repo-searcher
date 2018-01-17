/* @ngInject */
export function routing($stateProvider, $urlServiceProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlServiceProvider.rules.otherwise({state: 'usersearcher'});

  $stateProvider.state({
    name: 'usersearcher',
    url: '/search',
    component: 'usersearcher' // The component's name
  });

  $stateProvider.state({
    name: 'userdetails',
    url: '/user/:username',
    resolve: {
      user: ($transition$, githubService) => {
        const username = $transition$.params().username;
        //console.log('1. Activated User Details View');

        return githubService.getUser(username);
      },
      repos: (githubService, user) => {
        //console.log('2. Activated User Repositories View');
        return githubService.getRepos(user);
      }
    },
    component: 'userdetails'
  });

  // $stateProvider.state({
  //   name: 'userdetails.repodetails',
  //   url: '/:reponame',
  //   resolve: {
  //     repo: ($transition$, githubService) => {
  //       const username = $transition$.params().username;
  //       const reponame = $transition$.params().reponame;
  //       console.log('4. Activated Repo Details View [' + username + ', ' + reponame + ']');

  //       return githubService.getCollaborators(username, reponame);
  //     }
  //   },
  //   component: 'repodetails'
  // });

}
