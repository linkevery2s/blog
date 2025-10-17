var map;var p;var zoom;var hash;var todou = new Array(47);

	function start(x, y, z){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>東京都：<a href="https://catalog.data.metro.tokyo.lg.jp/dataset/t000019d0000000001">給水拠点一覧データ</a>'
	}).addTo(map);
		map.setView([x, y], z);
		
	}

    function ini() {
		start(35.595, 139.592, 10);
		
		todou = L.geoJson(dataset, {style: sty,onEachFeature: geo_k, pointToLayer:iro});
		map.addLayer(todou);

	}


function sty(feature) {
	return feature.properties && feature.properties.style;
}

function iro(feature, latlng) {

	var marker;
	marker = new L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'tint', prefix: 'fa' ,markerColor: 'blue'}) });
	return marker;

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