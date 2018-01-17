  /* @ngInject */
  export class UserSearcherController {
    constructor($interval, $state) {
      this.title = 'GitHub Viewer';
      this.username = 'angular';
      this.error = '';
      this.countdown = 5;
      this.countdownInterval;

      this.interval = $interval;
      this.state = $state;

      this.init();
    }

    init() {
      // this.countdownInterval = this.interval(this.decrementCountdown.bind(this), 1000, this.countdown);
      this.countdownInterval = this.interval(() => this.decrementCountdown(), 1000, this.countdown);
      return this.countdownInterval;
    }

    decrementCountdown() {
      this.countdown--;
      if(this.countdown < 1) {
        this.searchUser(this.username);
      }
    }

    searchUser(username) {
      if(this.countdownInterval) {
        this.interval.cancel(this.countdownInterval);
      }
      this.state
        .go('userdetails', {username: username})
        .catch(reason => this.error = reason.detail);
    }
  }
