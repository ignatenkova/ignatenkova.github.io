// для клиента с тайлами
// var osmMap = L.tileLayer( 'Tiles//{z}/{x}/{y}.png', {
// attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// } );

// для клиента без тайлов
var osmMap = L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
} );

var map = L.map('map', {
		layers: [osmMap],
		zoomControl: false 
	})
	.setView([56.415449, 61.916266], 13);

var polyline, markerSport, markerSportU, markerSportK, markerSportO, markerSat, flag;
// 

//add zoom control with your options
L.control.zoom({
	 position:'topright'
}).addTo(map);


var hideElem, showElem;

function forward() {
	hideElem.style.display = "none";
	showElem.style.display = "block";
}
function back() {
	hideElem.style.display = "none";
	showElem.style.display = "block";
}


document.getElementById('main1').onclick = function() {
	hideElem = document.getElementById('main');
	showElem = document.getElementById('year');
	if (flag) {
		map.removeLayer(markerSat);
		flag = 0;
		console.log(flag);
	};
};
document.getElementById('main1').addEventListener("click", forward);

document.getElementById('year1').onclick = function() {
	hideElem = document.getElementById('year');
	showElem = document.getElementById('str2018');
};
document.getElementById('year1').addEventListener("click", forward);
document.getElementById('year2').onclick = function() {
	hideElem = document.getElementById('year');
	showElem = document.getElementById('str2017');
};
document.getElementById('year2').addEventListener("click", forward);
document.getElementById('year3').onclick = function() {
	hideElem = document.getElementById('year');
	showElem = document.getElementById('str2016');
};
document.getElementById('year3').addEventListener("click", forward);



document.getElementById('str2018-1').onclick = function() {
	hideElem = document.getElementById('str2018');
	showElem = document.getElementById('road2018-1');
};
document.getElementById('str2018-1').addEventListener("click", forward);
document.getElementById('str2018-2').onclick = function() {
	hideElem = document.getElementById('str2018');
	showElem = document.getElementById('road2018-2');
};
document.getElementById('str2018-2').addEventListener("click", forward);
document.getElementById('str2018-3').onclick = function() {
	hideElem = document.getElementById('str2018');
	showElem = document.getElementById('road2018-3');
};
document.getElementById('str2018-3').addEventListener("click", forward);


document.getElementById('str2017-1').onclick = function() {
	hideElem = document.getElementById('str2017');
	showElem = document.getElementById('road2017-1');
};
document.getElementById('str2017-1').addEventListener("click", forward);
document.getElementById('str2017-2').onclick = function() {
	hideElem = document.getElementById('str2017');
	showElem = document.getElementById('road2017-2');
};
document.getElementById('str2017-2').addEventListener("click", forward);
document.getElementById('str2017-3').onclick = function() {
	hideElem = document.getElementById('str2017');
	showElem = document.getElementById('road2017-3');
};
document.getElementById('str2017-3').addEventListener("click", forward);


document.getElementById('str2016-1').onclick = function() {
	hideElem = document.getElementById('str2016');
	showElem = document.getElementById('road2016-1');
};
document.getElementById('str2016-1').addEventListener("click", forward);
document.getElementById('str2016-2').onclick = function() {
	hideElem = document.getElementById('str2016');
	showElem = document.getElementById('road2016-2');
};
document.getElementById('str2016-2').addEventListener("click", forward);
document.getElementById('str2016-3').onclick = function() {
	hideElem = document.getElementById('str2016');
	showElem = document.getElementById('road2016-3');
};
document.getElementById('str2016-3').addEventListener("click", forward);



document.getElementById('main2').onclick = function() {
	hideElem = document.getElementById('main');
	showElem = document.getElementById('sport');
	if (flag) {
		map.removeLayer(markerSat);
		flag = 0;
		console.log(flag);
	};
};
document.getElementById('main2').addEventListener("click", forward);

document.getElementById('sport-1').onclick = function() {
	hideElem = document.getElementById('sport');
	showElem = document.getElementById('mototr');
};
document.getElementById('sport-1').addEventListener("click", forward);
document.getElementById('sport-2').onclick = function() {
	hideElem = document.getElementById('sport');
	showElem = document.getElementById('arena');
};
document.getElementById('sport-2').addEventListener("click", forward);
document.getElementById('sport-3').onclick = function() {
	hideElem = document.getElementById('sport');
	showElem = document.getElementById('olimp');
};
document.getElementById('sport-3').addEventListener("click", forward);

document.getElementById('back1').onclick = function() {
	hideElem = document.getElementById('year');
	showElem = document.getElementById('main');
	map.removeLayer(polyline);
};
document.getElementById('back1').addEventListener("click", back);
document.getElementById('back2').onclick = function() {
	hideElem = document.getElementById('str2018');
	showElem = document.getElementById('year');
	map.removeLayer(polyline);
};
document.getElementById('back2').addEventListener("click", back);
document.getElementById('back3').onclick = function() {
	hideElem = document.getElementById('str2017');
	showElem = document.getElementById('year');
	map.removeLayer(polyline);
};
document.getElementById('back3').addEventListener("click", back);
document.getElementById('back4').onclick = function() {
	hideElem = document.getElementById('str2016');
	showElem = document.getElementById('year');
	map.removeLayer(polyline);
};
document.getElementById('back4').addEventListener("click", back);
document.getElementById('back5').onclick = function() {
	hideElem = document.getElementById('road2018-1');
	showElem = document.getElementById('str2018');
};
document.getElementById('back5').addEventListener("click", back);
document.getElementById('back6').onclick = function() {
	hideElem = document.getElementById('road2018-2');
	showElem = document.getElementById('str2018');
};
document.getElementById('back6').addEventListener("click", back);
document.getElementById('back7').onclick = function() {
	hideElem = document.getElementById('road2018-3');
	showElem = document.getElementById('str2018');
};
document.getElementById('back7').addEventListener("click", back);
document.getElementById('back8').onclick = function() {
	hideElem = document.getElementById('road2017-1');
	showElem = document.getElementById('str2017');
};
document.getElementById('back8').addEventListener("click", back);
document.getElementById('back9').onclick = function() {
	hideElem = document.getElementById('road2017-2');
	showElem = document.getElementById('str2017');
};
document.getElementById('back9').addEventListener("click", back);
document.getElementById('back10').onclick = function() {
	hideElem = document.getElementById('road2017-3');
	showElem = document.getElementById('str2017');
};
document.getElementById('back10').addEventListener("click", back);
document.getElementById('back11').onclick = function() {
	hideElem = document.getElementById('road2016-1');
	showElem = document.getElementById('str2016');
};
document.getElementById('back11').addEventListener("click", back);
document.getElementById('back12').onclick = function() {
	hideElem = document.getElementById('road2016-2');
	showElem = document.getElementById('str2016');
};
document.getElementById('back12').addEventListener("click", back);
document.getElementById('back13').onclick = function() {
	hideElem = document.getElementById('road2016-3');
	showElem = document.getElementById('str2016');
};
document.getElementById('back13').addEventListener("click", back);
document.getElementById('back14').onclick = function() {
	hideElem = document.getElementById('sport');
	showElem = document.getElementById('main');
	map.removeLayer(markerSport);
};
document.getElementById('back14').addEventListener("click", back);
document.getElementById('back15').onclick = function() {
	hideElem = document.getElementById('mototr');
	showElem = document.getElementById('sport');
};
document.getElementById('back15').addEventListener("click", back);
document.getElementById('back16').onclick = function() {
	hideElem = document.getElementById('arena');
	showElem = document.getElementById('sport');
};
document.getElementById('back16').addEventListener("click", back);
document.getElementById('back17').onclick = function() {
	hideElem = document.getElementById('olimp');
	showElem = document.getElementById('sport');
};
document.getElementById('back17').addEventListener("click", back);

////////////////////////////////////////
function draw(){
	polyline = L.polyline(coords, {
	color: color,
	weight: 5
	});
map.addLayer(polyline);
map.fitBounds(polyline.getBounds());
}

var redIcon = new L.Icon({
	iconUrl: 'images/placeholder.png',
	iconSize: [40, 40],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});
var blueIcon = new L.Icon({
	iconUrl: 'images/blue.png',
	iconSize: [40, 40],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});
var grayIcon = new L.Icon({
	iconUrl: 'images/gray.png',
	iconSize: [40, 40],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

function drawSport(){

markerSportU =  L.marker([56.412713, 61.915770], {icon: redIcon})
	.bindTooltip('мототрасса "Юность"')
	.openTooltip().on('click', function() { 
	document.getElementById('sport').display = "none";
	document.getElementById('mototr').display = "block";
	console.log('click :)');
}),
markerSportK = L.marker([56.413426, 61.926842], {icon: redIcon})
	.bindTooltip('каток "Каменск-Арена"')
	.openTooltip(),
markerSportO = L.marker([56.413688, 61.924804], {icon: redIcon})
	.bindTooltip('спортивный комплекс "Олимп"')
	.openTooltip();
markerSport = L.layerGroup([markerSportU, markerSportK,  markerSportO]);
map.addLayer(markerSport);
var group = new L.featureGroup([markerSportU, markerSportK, markerSportO]);
map.fitBounds(group.getBounds());
};

function drawSaturday(){
markerSat = L.layerGroup([L.marker([56.405621, 61.926885], {icon: blueIcon})
	.bindPopup('Парк Разгуляевский<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 25 человек<br>Убрано мусора - 25 мешков')
	.openPopup(),
	L.marker([56.419717, 61.916392], {icon: blueIcon})
	.bindPopup('Сквер за ТРЦ «Октябрьский»<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 60 человек<br>Собрано - 400 мешков мусора (по 120 литров)')
	.openPopup(),
	L.marker([56.431843, 61.875606], {icon: grayIcon})
	.bindPopup('Чистый ключ<br>доп. информация по телефону - (3439) 39-66-37')
	.openPopup(),
	L.marker([56.387168, 61.939193], {icon: blueIcon})
	.bindPopup('Байновский сад<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 90 человек<br>Убрано мусора - 4.8 тонн')
	.openPopup(),
	L.marker([56.416657, 61.913406], {icon: grayIcon})
	.bindPopup('Озеро "Семь ключей"<br>доп. информация по телефону - (3439) 39-66-37')
	.openPopup()]);
map.addLayer(markerSat);

var group2 = new L.featureGroup([L.marker([56.405621, 61.926885], {icon: blueIcon})
	.bindPopup('Парк Разгуляевский<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 25 человек<br>Убрано мусора - 25 мешков')
	.openPopup(),
	L.marker([56.419717, 61.916392], {icon: blueIcon})
	.bindPopup('Сквер за ТРЦ «Октябрьский»<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 60 человек<br>Собрано - 400 мешков мусора (по 120 литров)')
	.openPopup(),
	L.marker([56.431843, 61.875606], {icon: grayIcon})
	.bindPopup('Чистый ключ<br>доп. информация по телефону - (3439) 39-66-37')
	.openPopup(),
	L.marker([56.387168, 61.939193], {icon: blueIcon})
	.bindPopup('Байновский сад<br>доп. информация по телефону - (3439) 39-66-37<br>Участвовало - 90 человек<br>Убрано мусора - 4.8 тонн')
	.openPopup(),
	L.marker([56.416657, 61.913406], {icon: grayIcon})
	.bindPopup('Озеро "Семь ключей"<br>доп. информация по телефону - (3439) 39-66-37')
	.openPopup()]);
map.fitBounds(group2.getBounds());


if (!flag) {
	flag = 1;
};

console.log(flag);
};

document.getElementById('year1').addEventListener ("click", function() {
	color = 'magenta';
	coords = [[
	[56.397213, 61.935007],
	[56.396332, 61.936552],
	[56.395118, 61.942646]
	], [
	[56.386871, 61.933215],
	[56.384752, 61.943622]
	], [
	[56.389466, 61.930447],
	[56.392584, 61.933172]
	]];
});
document.getElementById('year1').addEventListener ("click", draw);
document.getElementById('year2').addEventListener ("click", function() {
	color = 'blue';
	coords = [[
	[56.423467, 61.893153],
	[56.423217, 61.894398],
	[56.421636, 61.896565]
	], [
	[56.426452, 61.892231],
	[56.425037, 61.902766]
	], [
	[56.428045, 61.891802],
	[56.426987, 61.899655]
	]];
});
document.getElementById('year2').addEventListener ("click", draw);
document.getElementById('year3').addEventListener ("click", function() {
	color = 'green';
	coords = [[
	[56.415914, 61.910984],
	[56.419887, 61.911457],
	[56.426451, 61.921713]
	], [
	[56.425446, 61.917014],
	[56.424625, 61.918634]
	], [
	[56.426564, 61.921649],
	[56.427622, 61.916671]
	]];
});
document.getElementById('year3').addEventListener ("click", draw);

document.getElementById('main2').addEventListener ("click", drawSport);

document.getElementById('main3').addEventListener ("click", drawSaturday);


// <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>



// // define toolbar options
// var options = {
// 	position: 'topleft', // toolbar position, options are 'topleft', 'topright', 'bottomleft', 'bottomright'
// 	drawMarker: true,  // adds button to draw markers
// 	drawPolyline: true,  // adds button to draw a ломаная линия
// 	drawRectangle: true,  // adds button to draw a прямоугольник
// 	drawPolygon: true,  // adds button to draw a многоугольник
// 	drawCircle: true,  // adds button to draw a cricle
// 	cutPolygon: false,  // adds button to cut a hole in a polygon
// 	editMode: false,  // adds button to toggle edit mode for all layers
// 	removalMode: true   // adds a button to remove layers
// };

// // add leaflet.pm controls to the map
// map.pm.addControls(options);

// // optional options for line style during draw. These are the defaults
// var options = {
// 	snappable: true,
// 	snapDistance: 20,
// 	hintlineStyle: {
// 		color: 'red',
// 		dashArray: [5, 5],
// 	},
// 	cursorMarker: false,
// 	finishOn: 'contextmenu',
// 	markerStyle: {
// 		draggable: true,
// 	}
// };
