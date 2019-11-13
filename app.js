const DOM_CACHE = {
  $infoBox: $('#infoBox')
};

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat: 39.930315, lng: -75.1586863},
    mapTypeId: 'roadmap'
  });

  // map.addListener('bounds_changed', function(e){
  //   console.log(e, 'bounds_changed');
  // });

  // move away from load geo json,
  // populate manually
  map.data.loadGeoJson('/data/800-dickinson-geojson.json', null, function(features){
    features.forEach(function(Feature){
      Feature.toGeoJson(function(obj){
        let coordinates = obj.geometry.coordinates;

        let path = coordinates.map(latLng => {
          return new google.maps.LatLng({lat: latLng[1], lng: latLng[0]});
        });
        // draw lines between markers
        let block = new google.maps.Polyline({
          path,
          // geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1,
          strokeWeight: 10,
        });

        block.addListener('click', function(){
          console.log(obj.properties);
        });

        block.addListener('mouseover', function(){

          DOM_CACHE.$infoBox.text(`${obj.properties.hundred} ${obj.properties.street} ${obj.properties.side} side`);

        });

        block.addListener('mouseout', function(){

          DOM_CACHE.$infoBox.text('');

        });

        block.setMap(map);

      });
    });
  });

}
