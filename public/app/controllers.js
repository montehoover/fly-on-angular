angular.module('AirplaneCtrls', ['AirplaneServices'])

.controller('TakeOffCtrl', ['$scope', function($scope) {
	$scope.captain = "Captain Mike Dexter";
}])

.controller('InventoryCtrl', ['$scope', 'AirplaneAPI', function($scope, AirplaneAPI) {
	$scope.planes = []

  AirplaneAPI.query(function success (data) {
    console.log(data);
    $scope.planes = data;
  }, function error (data) {
    console.log(data);
  })

  $scope.createPlane = function(manufacturer, model, engines) {
    AirplaneAPI.save({
      manufacturer: manufacturer,
      model: model,
      engines: engines
    }, function success(plane) {
      $scope.planes.push(plane);
    }, function error(data) {
      console.log(data);
    })
  }
}])