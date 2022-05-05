var map;var p;var zoom;var hash;var todou = new Array(47);

	function start(x, y, z){
		map = L.map('map');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors<br>東京都：<a href="https://catalog.data.metro.tokyo.lg.jp/dataset/t000014d0000000028">河川監視カメラ位置情報データ</a>'
	}).addTo(map);
		map.setView([x, y], z);

	}

    function ini() {
		start(35.695, 139.492, 10);

		todou = L.geoJson(dataset, {style: sty,onEachFeature: geo_k, pointToLayer:iro});
		map.addLayer(todou);

	}


function sty(feature) {
	return feature.properties && feature.properties.style;
}

function iro(feature, latlng) {

	var marker;
	marker = new L.marker(latlng, {icon: L.AwesomeMarkers.icon({icon: 'video', prefix: 'fa' ,markerColor: 'red'}) });
	return marker;

}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.place) {
        popup = "場所：" + feature.properties.place;
    }

    if (feature.properties && feature.properties.river){
    	popup += '<br>河川名：' + feature.properties.river;
    }

    if (feature.properties && feature.properties.url){
    	popup += '<br><iframe width="300" height="315" src="' + feature.properties.url + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }

    layer.bindPopup(popup);
}
