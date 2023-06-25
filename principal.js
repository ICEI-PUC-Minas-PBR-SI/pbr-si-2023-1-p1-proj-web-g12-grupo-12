function initMap() {
    var center = { lat: 37.7749, lng: -122.4194 };

    var mapOptions = {
        center: center,
        zoom: 12
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        title: 'Localização'
    });
}

window.onload = function () {
    initMap();
};