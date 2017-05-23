D3_V4.controller("forceCtrl",["$scope","$element",function($scope,$element){
    var container = d3.select(".chart_container");
    var svg = container.append("svg")
        .attr("class",'svg');
    var margin = {top: 10, right: 30, bottom: 30, left: 30};

    var simulation = d3.forceSimulation()
        .force("link")
    function refreshSVG(){
        svg.selectAll("g").remove();

    }
    refreshSVG();
    d3.select(window)
        .on("resize",function(){
            refreshSVG();
        })
}]);


