function initMap() {
    // The map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    
    // Adding Markers
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Step 1: labels
    
    var locations = [                       // Step 2: array of locations
        { lat: 40.785091, lng: -73.968285}, // Set of objects containing lat and lng
        { lat: 41.084045, lng: -73.874245},
        { lat: 40.754932, lng: -73.984016}
    ];
    
    // Step 3: iterate over the locations and apply labels to them
    // like a forEach loop
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    
    // Icon for Marker
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}