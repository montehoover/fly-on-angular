angular.module('AirplaneCtrls', [])

.controller('TakeOffCtrl', ['$scope', function($scope) {
	$scope.captain = "Captain Mike Dexter";
}])

.controller('InventoryCtrl', ['$scope', function($scope) {
	$scope.planes = [747, 737, 787]
}])