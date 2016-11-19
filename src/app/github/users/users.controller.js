(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .config(routerConfig)
    .controller('UserController', UserController);

  function routerConfig($stateProvider) {
    $stateProvider.state(
      'github-users', {
        url: '/github-users',
        templateUrl: 'app/github/users/users.html',
        controllerAs: 'vm',
        controller: 'UserController'
      }
    );
  }
  /** @ngInject */
  function UserController($http) {
      var vm = this;

      vm.query = '';

      vm.search = function() {
        $http.get("https://api.github.com/search/users?q=" + vm.query)
          .success(function (data) {
              vm.users = data;
          });
      }

  }
})();
