var map;var p;var zoom;var hash;var todou; var tiri;var koukuu;


		const online_pref = new Array(47);
		
			online_pref[1] = 'hokkaido';
			online_pref[2] = 'aomori';
			online_pref[3] = 'iwate';
			online_pref[4] = 'miyagi';
			online_pref[5] = 'akita';
			online_pref[6] = 'yamagata';
			online_pref[7] = 'fukushima';
			online_pref[8] = 'ibaraki';
			online_pref[9] = 'tochigi';
			online_pref[10] = 'gunma';
			online_pref[11] = 'saitama';
			online_pref[12] = 'tiba';
			online_pref[13] = 'tokyo';
			online_pref[14] = 'kanagawa';
			online_pref[15] = 'nigata';
			online_pref[16] = 'toyama';
			online_pref[17] = 'ishikawa';
			online_pref[18] = 'fukui';
			online_pref[19] = 'yamanashi';
			online_pref[20] = 'nagano';
			online_pref[21] = 'gifu';
			online_pref[22] = 'shizuoka';
			online_pref[23] = 'aichi';
			online_pref[24] = 'mie';
			online_pref[25] = 'shiga';
			online_pref[26] = 'kyoto';
			online_pref[27] = 'osaka';
			online_pref[28] = 'hyogo';
			online_pref[29] = 'nara';
			online_pref[30] = 'wakayama';
			online_pref[31] = 'tottori';
			online_pref[32] = 'shimane';
			online_pref[33] = 'okayama';
			online_pref[34] = 'hiroshima';
			online_pref[35] = 'yamaguchi';
			online_pref[36] = 'tokushima';
			online_pref[37] = 'kagawa';
			online_pref[38] = 'ehime';
			online_pref[39] = 'kochi';
			online_pref[40] = 'fukuoka';
			online_pref[41] = 'saga';
			online_pref[42] = 'nagasaki';
			online_pref[43] = 'kumamoto';
			online_pref[44] = 'oita';
			online_pref[45] = 'miyazaki';
			online_pref[46] = 'kagoshima';
			online_pref[47] = 'okinawa';

		
	function select_change(){
			
			const n = select_button.value;
			
			document.getElementById("river").innerHTML = '<iframe width="100%" height="500px" scrolling="no" frameborder="no" src="river_prefdata/' + online_pref[n] + '.html"></iframe>';

	}


	function start(x, y, z){
		map = L.map('map');
		tiri = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a><br>出典：国土地理院、<a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-W05.html" target="_blank">国土数値情報 河川データ</a>を加工・編集して作成'
	});
	
		koukuu = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a><br>出典：国土地理院、<a href="https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-W05.html" target="_blank">国土数値情報 河川データ</a>を加工・編集して作成'
			});
	
		const baseMaps = {"白地図": tiri, "航空写真": koukuu};
		
		L.control.layers( null ,baseMaps).addTo(map);
		
		map.setView([x, y], z);
		
	}

    function aichi_ini() {
		start(35.002, 137.200, 8);
		todou = L.geoJson(aichi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function hokkaido_ini() {
		start(43.469, 141.987, 6);
		todou = L.geoJson(hokkaido, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function aomori_ini() {
    	start(40.651, 140.724, 8);
		todou = L.geoJson(aomori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);
	}

    function iwate_ini() {
		start(39.686, 141.224, 8);
		todou = L.geoJson(iwate, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function akita_ini() {
		start(39.529, 140.389, 8);
		todou = L.geoJson(akita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyagi_ini() {
		start(38.505, 140.707, 8);
		todou = L.geoJson(miyagi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamagata_ini() {
		start(38.428, 140.026, 8);
		todou = L.geoJson(yamagata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukushima_ini() {
		start(37.392, 139.883, 8);
		todou = L.geoJson(fukushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nigata_ini() {
		start(37.375, 138.735, 8);
		todou = L.geoJson(nigata, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tochigi_ini() {
		start(36.673, 139.653, 8);
		todou = L.geoJson(tochigi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gunma_ini() {
		start(36.461, 138.950, 8);
		todou = L.geoJson(gunma, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ibaraki_ini() {
		start(36.271, 140.235, 8);
		todou = L.geoJson(ibaraki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tiba_ini() {
		start(35.488, 139.966, 8);
		todou = L.geoJson(tiba, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saitama_ini() {
		start(35.929, 139.147, 8);
		todou = L.geoJson(saitama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokyo_ini() {
		start(35.595, 139.592, 8);
		todou = L.geoJson(tokyo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kanagawa_ini() {
		start(35.3980, 139.3314, 8);
		todou = L.geoJson(kanagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamanashi_ini() {
		start(35.532, 138.565, 8);
		todou = L.geoJson(yamanashi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nagano_ini() {
		start(35.960, 137.928, 8);
		todou = L.geoJson(nagano, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shizuoka_ini() {
		start(35.012, 138.214, 8);
		todou = L.geoJson(shizuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function gifu_ini() {
		start(35.724, 136.890, 8);
		todou = L.geoJson(gifu, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function toyama_ini() {
		start(36.624, 137.016, 8);
		todou = L.geoJson(toyama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ishikawa_ini() {
		start(36.844, 136.785, 8);
		todou = L.geoJson(ishikawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukui_ini() {
		start(35.898, 136.192, 8);
		todou = L.geoJson(fukui, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shiga_ini() {
		start(35.255, 135.950, 8);
		todou = L.geoJson(shiga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function mie_ini() {
		start(34.606, 136.225, 8);
		todou = L.geoJson(mie, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kyoto_ini() {
		start(35.156, 135.368, 8);
		todou = L.geoJson(kyoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function osaka_ini() {
		start(34.692, 135.511, 8);
		todou = L.geoJson(osaka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function nara_ini() {
		start(34.207, 135.818, 8);
		todou = L.geoJson(nara, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function wakayama_ini() {
		start(33.975, 135.368, 8);
		todou = L.geoJson(wakayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hyogo_ini() {
		start(35.043, 134.484, 8);
		todou = L.geoJson(hyogo, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tottori_ini() {
		start(35.313, 133.786, 8);
		todou = L.geoJson(tottori, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okayama_ini() {
		start(34.940, 133.550, 8);
		todou = L.geoJson(okayama, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function shimane_ini() {
		start(34.854, 132.347, 8);
		todou = L.geoJson(shimane, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function hiroshima_ini() {
		start(34.556, 132.512, 8);
		todou = L.geoJson(hiroshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function yamaguchi_ini() {
		start(34.207, 131.550, 8);
		todou = L.geoJson(yamaguchi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagawa_ini() {
		start(34.057, 133.726, 8);
		todou = L.geoJson(kagawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function tokushima_ini() {
		start(33.852, 133.923, 8);
		todou = L.geoJson(tokushima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function ehime_ini() {
		start(33.679, 132.764, 8);
		todou = L.geoJson(ehime, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kochi_ini() {
		start(33.390, 133.259, 8);
		todou = L.geoJson(kochi, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function fukuoka_ini() {
		start(33.431, 130.583, 8);
		todou = L.geoJson(fukuoka, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function saga_ini() {
		start(33.170, 130.073, 8);
		todou = L.geoJson(saga, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

function oita_ini() {
		start(33.128, 131.083, 8);
		todou = L.geoJson(oita, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}


    function nagasaki_ini() {
		start(32.875, 129.661, 8);
		todou = L.geoJson(nagasaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kumamoto_ini() {
		start(32.426, 130.759, 8);
		todou = L.geoJson(kumamoto, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function miyazaki_ini() {
		start(32.213, 131.188, 8);
		todou = L.geoJson(miyazaki, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function kagoshima_ini() {
		start(31.541, 130.715, 8);
		todou = L.geoJson(kagoshima, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}

    function okinawa_ini() {
		start(26.436, 127.996, 8);
		todou = L.geoJson(okinawa, {style: sty,onEachFeature: geo_k, pointToLayer: iro});
		map.addLayer(todou);

	}


function sty(feature) {
	return feature.properties && feature.properties.style;
}

function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2ca9e1",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.W05_004) {
        popup = "河川名：" + feature.properties.W05_004;
    }

    layer.bindPopup(popup);
    
}