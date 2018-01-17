/* @ngInject */
export class GithubService {
  constructor() {
    this.init();
  }

  init() {
    //console.log('Activated Github Service');
  }

  responseHandler(response) {
    return response.json().then(data => {
      return response.ok ? data : Promise.reject({status: response.status, data});
    });
  }

  getUser(username) {
    return fetch('https://api.github.com/users/' + username)
      .then(this.responseHandler);
  }

  getRepos(user) {
    return fetch(user.repos_url)
      .then(this.responseHandler);
  }

  getCollaborators(username, reponame) {
    let repo;
    let repoUrl = 'https://api.github.com/repos/' + username + '/' + reponame;

    return fetch(repoUrl)
      .then(this.responseHandler)
      .then(data => {
        repo = data;
        return fetch(repoUrl + '/contributors').then(this.responseHandler);
      })
      .then(data => {
        repo.collaborators = data;
        return repo;
      });
  }
}
