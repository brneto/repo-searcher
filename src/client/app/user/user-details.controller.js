import RepoDetailsTemplate from '../repository/repo-details.html';

/* @ngInject */
export class UserDetailsController {
  constructor($uibModal, githubService) {
    this.repoSortOrder = '-stargazers_count';
    this.user = {};
    this.repos = [];

    this.modal = $uibModal;
    this.github = githubService;

    this.init();
  }

  init() {
    //console.log('3. Activated User Details Controller');
  }

  set repoClicked(repo) {
    let username = this.user.name.toLowerCase();
    let reponame = repo.name.toLowerCase();


    this.github.getCollaborators(username, reponame)
      .then(repo => {
        let modalOptions = {
          animation: true,
          controller: () => {
            return {repo: repo};
          },
          controllerAs: 'vm',
          template: RepoDetailsTemplate
        };

        this.modal.open(modalOptions).result.catch(() => {});
        //https://angular-ui.github.io/bootstrap/#modal

      });
  }
}
