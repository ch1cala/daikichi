angular.module('daikichiApp', [])

  .controller('DrawCtrl', function($scope, $http){
    $scope.result = null;

    $http.get('assets/results.json')
      .success(function(data){
        var i = Math.floor( Math.random() * data.length );
        $scope.result = data[i];
      });

  });
