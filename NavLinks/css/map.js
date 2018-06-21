function initMap(){
    // Map options
    var options = {
      zoom:8,
      center:{lat:42.3601,lng:-71.0589}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // Add marker
      addMarker({coords:event.latLng});
    });