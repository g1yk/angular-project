(function () {
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "Vitalii";
    $scope.finalMsg = "";

    $scope.inputCheck = function (str) {
      let words = str.split(' ');
      if (words.length > 3) {
        $scope.finalMsg = "Too much!"
      } else {
        $scope.finalMsg = "Enjoy!"
      }
    };


  }
}
)();