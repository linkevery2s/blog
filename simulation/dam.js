var map;var p;var zoom;var hash;var todou = new Array(47);

	function start(x, y, z){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>国土数値情報：<a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-W01.html">ダムデータ</a>'
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
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.name) {
        popup = "名称：" + feature.properties.name;
    }
    
    if (feature.properties && feature.properties.address){
    	popup += '<br>住所：' + feature.properties.address;
    }

    if (feature.properties && feature.properties.water){
    	popup += '<br>貯水量：' + feature.properties.water;
    }

    if (feature.properties && feature.properties.syubetu){
    	popup += '<br>種別：' + feature.properties.syubetu;
    }

    layer.bindPopup(popup);
}