(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .config(routerConfig)
    .controller('UserControllers', UserControllers);

  function routerConfig($stateProvider) {
    $stateProvider.state(
      'users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controllerAs: 'vm',
        controller: 'UserControllers'
      }
    );
  }
  /** @ngInject */
  function UserControllers($state, $stateParams, $http) {
    var vm = this;

    vm.userLoaded = false;

    vm.searchText = "cavarzan";

    vm.search = function () {
      $http.get("https://api.github.com/search/users?q=" + vm.searchText)
          .success(function (data) {
            console.log(data);
              vm.userData = data.items;
          });

    }

    vm.search();


      vm.predicate = '-updated_at';
  }
})();
