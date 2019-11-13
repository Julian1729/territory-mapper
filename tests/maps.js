describe('Google Map API', () => {

  var map = null;
  beforeEach(function(done){

    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 39.930315, lng: -75.1586863},
        mapTypeId: 'roadmap'
      });
    }
    initMap();
    done();

  });

  it('should detect map load by listening to first bounds_changed event', () => {

    google.maps.event.addListenerOnce(map, 'bounds_changed', function(){
      console.log('bounds_changed');
    });

  });

  // it('should allow user to draw on map', function(){
  //
  //   var map;
  //   function initMap() {
  //     map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 18,
  //       center: {lat: 39.930315, lng: -75.1586863},
  //       mapTypeId: 'roadmap'
  //     });
  //   }
  //   initMap();
  //   var drawingManager = new google.maps.drawing.DrawingManager({
  //         drawingMode: google.maps.drawing.OverlayType.MARKER,
  //         drawingControl: true,
  //         drawingControlOptions: {
  //           position: google.maps.ControlPosition.TOP_CENTER,
  //           drawingModes: ['rectangle']
  //         },
  //         markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
  //         rectangleOptions: {
  //           editable: true
  //         }
  //       });
  //       drawingManager.setMap(map);
  //
  // });


  it('should return true for bounds', function(){



  });

});
