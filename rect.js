d3.json('./points.json', function(data) {
    var svg = d3.select('body').append('svg').attr('width', 1500).attr('height', 2200);
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', function(d) {
            return d.x * 0.75;
        })
        .attr('y', function(d) {
            return d.y * 1.25;
        })
        .attr('height', function(d) {
            return d.height * 0.5;
        })
        .attr('width', function(d) {
            return d.width * 0.25;
        })
        .attr('stroke', 'gray')
        .attr('fill', function(d) {
            return d.color;
        })
        .attr('stroke-width', '2');
    update();

    function update() {
        for (var i = 0; i < data.length; i++) {
            tmpX = data[i].x;
            tmpY = data[i].y;
            tmpH = data[i].height;
            tmpW = data[i].width;

            data[i].x = tmpY;
            data[i].y = tmpW;
            data[i].height = tmpX;
            data[i].width = tmpH;
        }
    }

    function trigger() {
        d3.select('svg')
            .selectAll('rect')
            .data(data)
            .transition()
            .duration(2000)
            .attr('width', function(d) {
                return d.width * 0.25;
            })
            .duration(2000)
            .attr('height', function(d) {
                return d.height * 0.5;
            })
            .duration(2000)
            .attr('x', function(d) {
                return d.x * 0.75;
            })
            .duration(2000)
            .attr('y', function(d) {
                return d.y * 1.25;
            });
    }

    svg.on('click', function(d) {
        trigger();
        update();
    });
});
