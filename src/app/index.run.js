(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');

    $log.debug("DEBUG");
    $log.error("ERROR");
    $log.info("INFO");
    $log.warn("WARN");
  }

})();
