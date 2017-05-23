D3_V4.controller("histogramCtrl",["$scope","$element",function($scope,$element){
    var container = d3.select(".chart_container");
    var svg = container.append("svg")
        .attr("class",'svg');
    var margin = {top: 10, right: 30, bottom: 30, left: 30};
    var data = d3.range(1000).map(d3.randomBates(10));/*贝茨分布,随机生成1000个0-1之间的数字*/
    var formatCount = d3.format(",.0f");/*转换格式*/
    var g,
        width,
        height,
        x,
        bins,
        y,
        bar;
    function refreshSVG(){
        svg.selectAll("g").remove();
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");/*偏移*/
        width = $element.prop("offsetWidth")-margin.left-margin.right;
        height = $element.prop("offsetHeight")-margin.top-margin.bottom;
        x = d3.scaleLinear()
            .rangeRound([0, width]);/*创建线性比例尺 */
        console.log(x.domain());/*都是0-1*/
        console.log(x.ticks(20));
        !bins && (bins = d3.histogram()
            .domain(x.domain())
            .thresholds(x.ticks(20))/*x.domain范围内平均分配20组*/
            (data));/*生成正太分部数组*/
        y = d3.scaleLinear()
            .domain([0, d3.max(bins, function(d) { return d.length; })])/*寻找数组的最大长度*/
            .range([height, 0]);
        bar = g.selectAll(".histogram")
            .data(bins)
            .enter().append("g")
            .attr("class","histogram")
            .attr("transform",function(d){
                return "translate("+x(d.x0)+","+y(d.length)+")";
            });
        bar.append("rect")
            .attr("x",1)/*距离左侧的距离*/
            .attr("width",function(d){
                if(x(d.x1) - x(d.x0) - 1 <0)return 0;
                return x(d.x1) - x(d.x0) - 1;
            })
            .attr("height",function(d){
                return height-y(d.length);
            })
            .on("mouseover",function(){
                this.style.fill = "yellow";
            })
            .on("mouseout",function(){
                this.style.fill = "purple";
            });
        bar.append("text")
            .attr("dy",".9em")
            .attr("y",6)/*在顶部的距离*/
            .attr("x",function(d){
                return (x(d.x1) - x(d.x0))/2;
            })
            .attr("text-anchor","middle")/*显示在中间*/
            .text(function(d){
                if(d.length == 0)return "";
                //return d.length;
                return formatCount(d.length);
            });
        g.append("g")
            .attr("class","axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        g.append("g")
            .attr("class","axis axis--x")
            .call(d3.axisLeft(y));
    }
    refreshSVG();
    d3.select(window)
        .on("resize",function(){
            refreshSVG();
        })
}]);

