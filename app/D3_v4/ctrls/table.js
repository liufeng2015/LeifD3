D3_V4.controller("pieCtrl",["$scope","$element",function($scope,$element){
    var container = d3.select(".chart_container");
    var svg = container.append("svg")
        .attr("class",'svg');
    var margin = {top: 30, right: 30, bottom: 30, left: 30};
    var list = [];
    for(var i=0;i < 20;i++){
        list.push(d3.range(10));
    }
    var width,
        height;
    function refreshSVG(){
        width = $element.prop("offsetWidth")-margin.left-margin.right;
        height = $element.prop("offsetHeight")-margin.top-margin.bottom;

    }

}]);

