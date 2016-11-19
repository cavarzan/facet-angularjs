(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .config(routerConfig)
    .controller('RepositoryController', RepositoryController);

  function routerConfig($stateProvider) {
    $stateProvider.state(
      'repositories', {
        url: '/github-users/:login/repositories',
        templateUrl: 'app/github/repositories/repositories.html',
        controllerAs: 'vm',
        controller: 'RepositoryController'
      }
    );
  }
  /** @ngInject */
  function RepositoryController($http, $stateParams) {
      var vm = this;
      var login = $stateParams.login;

      //GET /users/:login/repos

  }
})();
