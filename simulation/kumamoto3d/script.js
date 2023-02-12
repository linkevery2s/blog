d3.csv('./kumamoto.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { 

            return row[key]; 

        });
    }

    let data = [{
        x: unpack(rows, 'lat'),
        y: unpack(rows, 'lng'),
        z: unpack(rows, 'depth'),
        text: unpack(rows, 'm'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(23, 190, 207)',
          size: 2
        }
    }];

    let layout = {
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
        title: '熊本地震を3Dにて深さまで可視化'
        
    };


        var icon1 = {
            'width': 500,
            'height': 600,
            'path': 'M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
        }

    let config = {responsive: true,
                modeBarButtonsToAdd: [
                {
                    name: 'rotate',
                    icon: icon1,
                    click: function(gd) {
                        setInterval( () => {

                            const newData = gd._fullLayout.scene._scene.getCamera()

                            const currentX = newData.eye.x
                            const currentY = newData.eye.y
                            const currentZ = newData.eye.z

                            const newX = (currentX * Math.cos(1*(Math.PI/180))) - (currentY * Math.sin(1*(Math.PI/180)))
                            const newY = (currentX * Math.sin(1*(Math.PI/180))) + (currentY * Math.cos(1*(Math.PI/180)))

                            const update = {
                                x: newX,
                                y: newY,
                                z: currentZ
                            }

                            Plotly.relayout(gd, 'scene.camera.eye', update)
                        }, 50)
                    }
                }]

};

    Plotly.newPlot('myDiv', data, layout, config);

});