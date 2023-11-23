ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.753994, 37.622093],
        zoom: 10,
        controls: []
    });

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search',
            noPlacemark: true
        }
    });

    myMap.controls.add(searchControl);

    myMap.events.add('click', function (e) {
        var coords = e.get('coords');
        getAddress(coords);
    });

    function getAddress(coords) {
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            var address = firstGeoObject.getAddressLine();
            showAddress(coords, address);
        });
    }

    function showAddress(coords, address) {
        var resultContainer = document.getElementById('result');
        var html = 'Координаты: [' + coords[0].toPrecision(6) + ', ' + coords[1].toPrecision(6) + ']<br>' +
                    'Адрес: ' + address;
        resultContainer.innerHTML = html;
    }
}