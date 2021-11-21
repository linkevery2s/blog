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
					fillColor: "#2ca9e1",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
			}

function geo_k(feature, layer) {
    var popup;
    if (feature.properties && feature.properties.W01_001) {
        popup = "名称：" + feature.properties.W01_001;
    }
    if (feature.properties && feature.properties.W01_013) {
        popup += "<br>住所：" + feature.properties.W01_013;
    }
    if (feature.properties && feature.properties.W01_003){
    	popup += '<br>水系名：' + feature.properties.W01_003;
    }

    if (feature.properties && feature.properties.W01_004){
    	popup += '<br>河川名：' + feature.properties.W01_004;
    }

    if (feature.properties && feature.properties.W01_005){
    	
    	if(feature.properties.W01_005 == "1"){
    		popup += '<br>ダム形式：アーチダム';
    	}
    	if(feature.properties.W01_005 == "2"){
    		popup += '<br>ダム形式：バットレスダム';
    	}
    	if(feature.properties.W01_005 == "3"){
    		popup += '<br>ダム形式：アースダム';
    	}
    	if(feature.properties.W01_005 == "4"){
    		popup += '<br>ダム形式：アスファルトフェイシングダム';
    	}
    	if(feature.properties.W01_005 == "5"){
    		popup += '<br>ダム形式：明日ダルとコアダム';
    	}
    	if(feature.properties.W01_005 == "6"){
    		popup += '<br>ダム形式：フローティングゲートダム（可動堰）';
    	}
    	if(feature.properties.W01_005 == "7"){
    		popup += '<br>ダム形式：重力式コンクリートダム';
    	}
    	if(feature.properties.W01_005 == "8"){
    		popup += '<br>ダム形式：重力式アーチダム';
    	}
    	if(feature.properties.W01_005 == "9"){
    		popup += '<br>ダム形式：重力式コンクリートダム・フィルダム複合ダム';
    	}
    	if(feature.properties.W01_005 == "10"){
    		popup += '<br>ダム形式：中空重力式コンクリートダム';
    	}
    	if(feature.properties.W01_005 == "11"){
    		popup += '<br>ダム形式：マルティプルアーチダム';
    	}
    	if(feature.properties.W01_005 == "12"){
    		popup += '<br>ダム形式：ロックフィルダム';
    	}
    	if(feature.properties.W01_005 == "13"){
    		popup += '<br>ダム形式：台形CSGダム';
    	}

    }

    if (feature.properties && feature.properties.W01_006){
    	//popup += '<br>河川名：' + feature.properties.W01_006;
    	
    	let motib = feature.properties.W01_006.split(',');
    	
    		if(motib[0] == "1"){
    			popup += '<br>使用目的：洪水調節、農地防災';
    		}
    		if(motib[0] == "2"){
    			popup += '<br>使用目的：不特定用水、河川維持用水';
    		}
    		if(motib[0] == "3"){
    			popup += '<br>使用目的：灌漑、特定(新規)灌漑用水';
    		}
    		if(motib[0] == "4"){
    			popup += '<br>使用目的：上水道用水';
    		}
    		if(motib[0] == "5"){
    			popup += '<br>使用目的：工業用水道用水';
    		}
    		if(motib[0] == "6"){
    			popup += '<br>使用目的：発電';
    		}
    		if(motib[0] == "7"){
    			popup += '<br>使用目的：消流雪用水';
    		}
    		if(motib[0] == "8"){
    			popup += '<br>使用目的：レクリエーション';
    		}


    	for (let i =1; i < motib.length; i++){
    		
    		if(motib[i] == "1"){
    			popup += '、農地防災';
    		}
    		if(motib[i] == "2"){
    			popup += '、不特定用水、河川維持用水';
    		}
    		if(motib[i] == "3"){
    			popup += '、灌漑、特定(新規)灌漑用水';
    		}
    		if(motib[i] == "4"){
    			popup += '、上水道用水';
    		}
    		if(motib[i] == "5"){
    			popup += '、工業用水道用水';
    		}
    		if(motib[i] == "6"){
    			popup += '、発電';
    		}
    		if(motib[i] == "7"){
    			popup += '、消流雪用水';
    		}
    		if(motib[i] == "8"){
    			popup += '、レクリエーション';
    		}

    	}
    	
    }

    if (feature.properties && feature.properties.W01_007){
    	popup += '<br>ダム規模（堤高）：' + feature.properties.W01_007 + 'm';
    }

    if (feature.properties && feature.properties.W01_010){
    	popup += '<br>総貯水量：' + feature.properties.W01_010 + '千m3';
    }

    if (feature.properties && feature.properties.W01_012){
    	popup += '<br>竣工年：' + feature.properties.W01_012 + "年";
    }

    layer.bindPopup(popup);
}