D3_V4.controller("pieCtrl",["$scope","$element",function($scope,$element){

    var pieContainer = d3.select(".chart_container");
    var svg = pieContainer.append("svg")
            .attr("class",'.svg');
    var width = $element.prop("offsetWidth");
    var height = $element.prop("offsetHeight");
    var radius = d3.min[width/2,height/2];

    var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    var pie = d3.pie()
        .sort(null)
        .value(function(d){
            return d.population;
        });
    var path = d3.arc()
    .outerRadius(radius-10)
    .innerRadius(0);

    var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);



    //var dataSet = [ 30 , 10 , 43 , 55,8,23 ];
    //var pie = d3.layout.pie();
    //var radiusSet = pie(dataSet);
    //var padding = {left:20,right:20,top:20,bottom:20};
    //var radius = d3.min([($element.prop("offsetHeight")-padding.top-padding.bottom)/2,($element.prop("offsetWidth")-padding.left-padding.right)/2]);
    //var rHeight = ($element.prop("offsetHeight")-padding.top-padding.bottom-2*radius)/2;
    //var rWidth = ($element.prop("offsetWidth")-padding.left-padding.right-2*radius)/2;
    //var arc = d3.svg.arc()
    //    .innerRadius(0)
    //    .outerRadius(radius);
    //var arcSize = d3.svg.arc()
    //    .innerRadius(0)
    //    .outerRadius(radius+15);
    //var color = d3.scale.category10();
    //var arcs = svg.selectAll("g")
    //    .data(radiusSet)
    //    .enter()
    //    .append("g")
    //    .attr("transform","translate("+(radius+padding.left+rWidth)+","+(radius+padding.top+rHeight)+")");
    //
    //arcs.append("path")
    //    .attr("fill","gray")
    //    .on("mouseover",function(d){
    //        d3.select(this)
    //            .attr("d",function(){
    //                return arcSize(d);
    //            });
    //    })
    //    .on("mouseout",function(d){
    //        d3.select(this)
    //            .attr("d",function(){
    //                return arc(d);
    //            });
    //        //svg.selectAll(".tip_group").remove()
    //    })
    //    .transition()
    //    .delay(function(d,i){
    //        return i*100;
    //    })
    //    .duration(800)
    //    .attr("fill",function(d,i){
    //        return color(i);
    //    })
    //    .attr("d",function(d){
    //        return arc(d);
    //    });
    //arcs.append("text")
    //    .attr("transform",function(d,i){
    //        return "translate("+arc.centroid(d)+")"
    //    })
    //    .attr("text-anchor","middle")
    //    .attr("color","red")
    //    .text(function(d){
    //        return d.data;
    //    });
    //d3.select(window)
    //    .on("resize",function(){
    //        radius = d3.min([($element.prop("offsetHeight")-padding.top-padding.bottom)/2,($element.prop("offsetWidth")-padding.left-padding.right)/2]);
    //        rHeight = ($element.prop("offsetHeight")-padding.top-padding.bottom-2*radius)/2;
    //        rWidth = ($element.prop("offsetWidth")-padding.left-padding.right-2*radius)/2;
    //        arc.outerRadius(radius);
    //        arcSize.outerRadius(radius+15);
    //        svg.selectAll("g").remove();
    //        arcs=svg.selectAll("g")
    //            .data(radiusSet)
    //            .enter()
    //            .append("g")
    //            .attr("transform","translate("+(radius+padding.left+rWidth)+","+(radius+padding.top+rHeight)+")");
    //
    //        arcs.append("path")
    //            .attr("fill","gray")
    //            .on("mouseover",function(d,i,event){
    //                d3.select(this)
    //                    .attr("d",function(){
    //                        return arcSize(d);
    //                    });
    //            })
    //            .on("mouseout",function(d){
    //                d3.select(this)
    //                    .attr("d",function(){
    //                        return arc(d);
    //                    });
    //                //svg.selectAll(".tip_group").remove();
    //
    //            })
    //            .transition()
    //            .delay(function(d,i){
    //                return (i+1)*100;
    //            })
    //            .duration(800)
    //            .attr("fill",function(d,i){
    //                return color(i);
    //            })
    //            .attr("d",function(d){
    //                return arc(d);
    //            });
    //        arcs.append("text")
    //            .attr("transform",function(d,i){
    //                return "translate("+arc.centroid(d)+")"
    //            })
    //            .attr("text-anchor","middle")
    //            .attr("color","red")
    //            .text(function(d){
    //                return d.data;
    //            });
    //    })
}]);
