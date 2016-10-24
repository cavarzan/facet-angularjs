(function() {
  'use strict';

  angular
    .module('angularjsExample')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-top-left';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
