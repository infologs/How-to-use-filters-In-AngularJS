var app = angular.module("app01", []);

app.controller("controller1",["$scope",function($scope){
	$scope.Name = "Abhishek";
	$scope.CountryName = "";
	$scope.Amount = "200";
	$scope.SortType = "name";

	$scope.Information = [
		{name:'Jani',country:'Norway'},
		{name:'Abhishek',country:'India'},
		{name:'Ravi',country:'India'},
		{name:'Scott',country:'US'},
		{name:'Tiger',country:'US'},
		{name:'David',country:'Australia'},
		{name:'Sri',country:'Newzeland'},
		{name:'Harsha',country:'England'},
		{name:'Cameron',country:'SriLanka'},
		{name:'Paresh',country:'Brazil'}
		]

	$scope.Sort = function(type) {
		$scope.SortType = type;
	}
}]);