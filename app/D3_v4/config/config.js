D3_V4.config(['$stateProvider',function($stateProvider){
    $stateProvider
        .state('bar',{
            url: '/bar',
            template: '<div class="chart_container"></div>',
            controller:"barCtrl"
        })
        .state('pie',{
            url: '/pie',
            template: '<div class="chart_container"></div>',
            controller:"pieCtrl"
        })
        .state('histogram',{
            url: '/histogram',
            template: '<div class="chart_container"></div>',
            controller:"histogramCtrl"
        })
        .state('force',{
            url: '/force',
            template: '<div class="chart_container"></div>',
            controller:"forceCtrl"
        })

}]);