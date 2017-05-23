D3_V4.controller("HomeCtrl",["$scope",function($scope){
    $scope.chartList = [
        {url:"bar",name:"柱状图"},
        {url:"pie",name:"饼状图"},
        {url:"histogram",name:"直方图"},
        {url:"map",name:"地图"},
        {url:"excel",name:"表格"}
    ];
}]);
