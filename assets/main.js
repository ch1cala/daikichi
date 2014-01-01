angular.module('daikichiApp', [])

  .controller('DrawCtrl', function($scope, $http, $location){
    $scope.result = null;
    $scope.shareText = '';
    $scope.fbAppId = '640131609366815';
    $scope.url = encodeURIComponent($location.absUrl());
    $scope.twTitle = encodeURIComponent('\n大吉おみくじ');

    $http.get('assets/results.json')
      .success(function(data){
        var i = Math.floor( Math.random() * data.length );
        $scope.result = data[i];
        $scope.shareText = encodeURIComponent(data[i].text);
      });

  });
