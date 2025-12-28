function sini(){

		map = L.map('map_canvas');
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a>'
  		}).addTo(map);
  		
  		hash = new L.Hash(map);
  		
		var para = location.hash;
		var par = para.split("/");
		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'red'});
		var marker = L.marker([par[1] ,par[2]] ,{icon: pulsingIcon}).addTo(map);

}
