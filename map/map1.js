var mymap = L.map('map1').setView([37.8, -96], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(mymap);

var geojson = L.geoJson(statesData).addTo(mymap);


// control that shows state info on hover
	var info = L.control();

	info.onAdd = function (mymap) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		this._div.innerHTML = '<h4>Latino Population</h4>' +  (props ?
			'<b>' + props.name + '</b><br />' + props.population + ' people'
			: 'Hover over a state');
	};

	info.addTo(mymap);


  // get color depending on population value
	function getColor(p) {
		return p > '14.000.000' ? '#800026' :
        p > '5.000.000' ? '#bd0026' :
				p > '2.000.000'  ? '#e31a1c' :
				p > '1.000.000'  ? '#fc4e2a' :
				p > 500.000   ? '#fd8d3c' :
				p > 250.000   ? '#feb24c' :
				p > 100.000   ? '#fed976' :
				p > 50.000   ? '#ffeda0' :
							'#ffffcc';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.population)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 5,
			color: '#666',
			dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}

	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(mymap);





  	var legend = L.control({position: 'bottomright'});

  	legend.onAdd = function (mymap) {

  		var div = L.DomUtil.create('div', 'info legend'),
  			grades = [0, 50.000, 100.000, 250.000, 500.000, '1.000.000', '2.000.000'],
  			labels = [],
  			from, to;

  		for (var i = 0; i < grades.length; i++) {
  			from = grades[i];
  			to = grades[i + 1];

  			labels.push(
  				'<i style="background:' + getColor(from + 1) + '"></i> ' +
  				from + (to ? '&ndash;' + to : '+'));
  		}

  		div.innerHTML = labels.join('<br>');
  		return div;
  	};

  	legend.addTo(mymap);




    /// mexican Americans

    var mapmex = L.map('locmex').setView([37.8, -96], 4);
    L.tileLayer('https://api.mapbox.com/styles/v1/claragrcia/cj9zxgovg6p642rnv51ik77oc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhcmFncmNpYSIsImEiOiJjajl6eGJ2bWExb3phMnFtZHg3dmt5amkzIn0.9r14gaJa-pSBCcnia7FSfQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mapmex);


// cali
    var circle1 = L.circle([34.621143, -116.656156], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 250000
    }).addTo(mapmex);

    circle1.bindPopup('The large majority of Mexican Americans reside in California. <br> Los Angeles is the home of over 1.2 million people of Mexican ancestry.')
    .openPopup();

// Tucson
    var circle2 = L.circle([31.999280, -111.075174], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mapmex);
    circle2.bindPopup('Arizona has one of the largest Mexican American populations.<br> The majority of them reside in Phoenix and Tucson.')
    .openPopup();

    var circle3 = L.circle([28.103956, -97.236067], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300000
    }).addTo(mapmex);
    circle3.bindPopup('Mexican-Americans are the ethnic majority in South Texas.')
    .openPopup();


    var circle4 = L.circle([32.817323, -96.798273], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 30000
    }).addTo(mapmex);
      circle4.bindPopup('Dallas has the fifth largest Mexican-American population in the country.')


    var circle5 = L.circle([31.761012, -106.152289], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mapmex);
    circle5.bindPopup('El Paso, Texas is the largest city bordering a Mexican state. Historically has had a large Mex-Am community.')


    var circle6 = L.circle([41.825633, -87.714927], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mapmex);
  circle6.bindPopup('Chicago has the 2nd largest population of Mexican Americans, after Los Angeles.')

    /// cubans

    var mapcub = L.map('loccuban').setView([37.8, -96], 4);
    L.tileLayer('https://api.mapbox.com/styles/v1/claragrcia/cj9zxgovg6p642rnv51ik77oc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhcmFncmNpYSIsImEiOiJjajl6eGJ2bWExb3phMnFtZHg3dmt5amkzIn0.9r14gaJa-pSBCcnia7FSfQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mapcub);

// miami
    var circle7 = L.circle([25.686318, -80.398841], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 100000
    }).addTo(mapcub);


    /// puerto Ricans

    var mappr = L.map('locpr').setView([37.8, -96], 4);
    L.tileLayer('https://api.mapbox.com/styles/v1/claragrcia/cj9zxgovg6p642rnv51ik77oc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhcmFncmNpYSIsImEiOiJjajl6eGJ2bWExb3phMnFtZHg3dmt5amkzIn0.9r14gaJa-pSBCcnia7FSfQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
    }).addTo(mappr);


    var circle8 = L.circle([40.697488, -73.979692], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mappr);


    var circle9 = L.circle([40.000462, -75.124803], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mappr);


// orlando

    var circle10 = L.circle([28.489126, -81.344312], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mappr);

// chicago

    var circle11 = L.circle([41.825633, -87.714927], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(mappr);

// philadelphia
