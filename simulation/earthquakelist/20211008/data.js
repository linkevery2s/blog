var map;var p;var zoom;var hash;var todou = new Array(47);

	function start(x, y, z){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>気象庁：<a href="http://www.data.jma.go.jp/svd/eqev/data/daily_map/index.html">震源リスト</a>'
	}).addTo(map);
		map.setView([x, y], z);
		
	}

    function ini() {
		start(37.777, 137.587, 6);
		
		todou = L.geoJson(dataset, {style: sty,onEachFeature: geo_k, pointToLayer:iro});
		map.addLayer(todou);

	}


function sty(feature) {
	return feature.properties && feature.properties.style;
}

function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#e2041b",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.point) {
        popup = "場所：" + feature.properties.point;
    }
    if (feature.properties && feature.properties.day) {
        popup += "<br>時刻：" + feature.properties.day + " " + feature.properties.time + ":" + feature.properties.second;
    }
    if (feature.properties && feature.properties.depth){
    	popup += '<br>深さ：' + feature.properties.depth + "km";
    }

    if (feature.properties && feature.properties.magnitude){
    	popup += '<br>マグニチュード：' + feature.properties.magnitude;
    }

    layer.bindPopup(popup);
}