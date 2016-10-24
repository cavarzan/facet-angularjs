(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $interval, $state) {
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

  }
})();
