(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $interval, $state, $http) {
    var vm = this;

    vm.inputModel = '';
    vm.user = {
      name : 'Deividi'
    };

    $interval(function () {
      vm.time = moment().format('HH:MM:ss');
    }, 1000);


    $timeout(function () {
      vm.inputModel = 'Inicial';
    }, 2000);

    vm.click = function () {
      vm.user.name = vm.inputModel;
    };

    vm.navigateToList = function () {
      $state.go('list');
    };

    vm.reposLoaded = false;

        vm.userLoaded = false;

        vm.username = "cavarzan";

        $http.get("https://api.github.com/users/" + vm.username)
            .success(function (data) {
                vm.userData = data;
                loadRepos();
            });

        var loadRepos = function () {
            $http.get(vm.userData.repos_url)
                .success(function (data) {
                    vm.repoData = data;
                });
        };
        

        vm.predicate = '-updated_at';



  }
})();
