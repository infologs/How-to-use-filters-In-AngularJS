var app = angular.module("app01", []);

app.controller("controller1",["$scope",function($scope){
	$scope.Name = "Abhishek";
	$scope.CountryName = "";
	$scope.Amount = "200";
}]);