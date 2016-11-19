(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .directive('dateInfo', dateInfo);

  /** @ngInject */
  function dateInfo($parse) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/datetinfo.html',
      scope: {
          repo: '='
      },
      link : function(scope, element, attrs) {

        // scope.repo = scope.$eval(attrs.repo)

      }
    };

    return directive;


  }

})();
