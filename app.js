const DOM_CACHE = {
  $infoBox: $('#infoBox')
};

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    // zoom: 15,
    // center: new google.maps.LatLng( 39.930315, -75.1586863 ),
    center: {lat: 39.930315, lng: -75.1586863},
    mapTypeId: 'roadmap'
  });

  map.data.loadGeoJson('/line.json', null, function(features){
    features.forEach(function(Feature){
      Feature.toGeoJson(function(obj){
        let coordinates = obj.geometry.coordinates;
        // map to latLng objects

        var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 4
        };

        let path = coordinates.map(latLng => {
          return new google.maps.LatLng({lat: latLng[1], lng: latLng[0]});
        });
        // draw lines between markers
        let block = new google.maps.Polyline({
          path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 0,
          strokeWeight: 4,
          icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '30px'
          }],
          // map
        });

        block.addListener('click', function(){
          console.log(obj.properties);
        });

        block.addListener('mouseover', function(){
          DOM_CACHE.$infoBox.text(`${obj.properties.hundred} ${obj.properties.street} ${obj.properties.side} side`);
        });

        block.setMap(map);
        
      });
    });
  });

}

// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
//   for (var i = 0; i < results.features.length; i++) {
//     var coords = results.features[i].geometry.coordinates;
//     var latLng = new google.maps.LatLng(coords[1],coords[0]);
//     var marker = new google.maps.Marker({
//       position: latLng,
//       map: map
//     });
//   }
// }
