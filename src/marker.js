/* Add a polygon to the map */
/* TODO: Implement polygon drawing by using this code and the below code that gets X, Y coord
    of mouse click? */
var p1 = new L.LatLng(34, -126),
    p2 = new L.LatLng(40, -125),
    p3 = new L.LatLng(36, -124),
    polygonPoints = [p1, p2, p3],
    polygon = new L.Polygon(polygonPoints);

map.addLayer(polygon);

function addMarker() {
    map.on('click', onMapClick);

    var popup = new L.Popup();

    /* On map click at a marker and prompt for label and display where you clicked */
    function onMapClick(e) {
        var latlngStr = '(' + e.latlng.lat.toFixed(3) + ', ' + e.latlng.lng.toFixed(3) + ')';

        var markerLocation = new L.LatLng(e.latlng.lat, e.latlng.lng),
            marker = new L.Marker(markerLocation);

        var label = prompt("Enter marker label:");

        map.addLayer(marker);
        marker.bindTooltip(label,
            {
                permanent: true,
                direction: 'right'
            });


        popup.setLatLng(e.latlng);
        popup.setContent("You clicked the map at " + latlngStr);
        map.openPopup(popup);
    }
}