(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function MalarkeyController($log, githubContributor) {
      var vm = this;

      vm.contributors = [];

      activate();

      function activate() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      }

      function getContributors() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;

          return vm.contributors;
        });
      }
    }

  }

  angular
    .module('angularjsExample').directive('changeColor', function ($parse, $log) {
    return {
      restrict : 'A',
      scope : {
        name : '='
      },
      link : function (scope, elem, attrs) {

        var modelValue = $parse(attrs.ngModel);


        $log.debug(modelValue);
        scope.$watch('name', function(value) {
          if (value === 'Deividi') {
            elem.css( {'background-color' :  'green'});
          } else  if (value === 'batman') {
            elem.css( {'background-color' :  'black'});
          } else {
            elem.css( {'background-color' :  'white'});
          }
        });
      }
    };
  });

})();
