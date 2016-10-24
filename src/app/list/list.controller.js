(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .config(routerConfig)
    .controller('ListController', ListController);

  function routerConfig($stateProvider) {
    $stateProvider.state(
      'list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      }
    );
  }
  /** @ngInject */
  function ListController(storage) {
    var vm = this;
    vm.todo = {
      name : '',
      finished : false
    };

    vm.todos = storage.get('todos') || [];

    vm.addTodo = function () {
      vm.todos.push(angular.copy(vm.todo));
      vm.todo = {
        name : '',
        finished : false
      };
      storage.set('todos', vm.todos);
    };

    vm.todoChanged = function () {
      storage.set('todos', vm.todos);
    };

    vm.deleteTodo = function (todo, $index) {
      console.log($index, vm.todos[$index]);
      // vm.todos.splice($index, 1);
      vm.todos.splice(vm.todos.indexOf(todo), 1);
      vm.todoChanged();
    }

  }
})();
