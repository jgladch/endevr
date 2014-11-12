angular.module('endevr.controllers')

// The BrowseCtrl sets the heading on the main page.
// Currently hardcoded for 'Browse Employers'
// but should be variable for 'Browse Candidates'
// in the future.
.controller('BrowseCtrl', function($scope) {
  $scope.interest = 'Employers';
});
