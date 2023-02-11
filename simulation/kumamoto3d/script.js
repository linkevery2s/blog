d3.csv('https://raw.githubusercontent.com/linkevery2s/testdata/main/kumamoto.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { 

            return row[key]; 

        });
    }

    var data = [{
        x: unpack(rows, 'lat'),
        y: unpack(rows, 'lng'),
        z: unpack(rows, 'depth'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(23, 190, 207)',
          size: 2
        }
    }];

    var layout = {
        height: 600,
                scene: {
            aspectratio: {
                x: 1,
                y: 1,
                z: 1
            },
            camera: {
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                eye: {
                    x: 1.25,
                    y: 1.25,
                    z: 1.25
                },
                up: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            },
            xaxis: {
                type: 'linear',
                zeroline: false
            },
            yaxis: {
                type: 'linear',
                zeroline: false
            },
            zaxis: {
                type: 'linear',
                zeroline: false
            }
        },
        title: '3d point clustering'
        
    };

    var config = {responsive: true};

    Plotly.newPlot('myDiv', data, layout, config);

});