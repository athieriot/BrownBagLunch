var map;
$(document).ready(function () {
    map = new GMaps({
        div: '#map',
        lat: 55.378051,
        lng: -3.435973,
        zoom: 5,
        disableDefaultUI: true
    });

    for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {
        var ville = data['villes'][villeIndex];
        createVilleMarker(ville);
    }

    function createVilleMarker(ville) {
        var action = function (e) {
            window.location = window.location + "#" + ville['name'];
        };
        map.addMarker({
            lat: ville['lat'],
            lng: ville['lng'],
            title: ville['name'],
            click: action
        });
    };
});



function addPaireImpaire(){
     for (var villeIndex = 0; villeIndex < data['villes'].length; villeIndex++) {        
        var baggers = data['villes'][villeIndex]['baggers'];
        if (baggers !== undefined) {
            for (var baggerIndex = 0; baggerIndex < baggers.length; baggerIndex++) {
                var bagger = baggers[baggerIndex];
                bagger['paire'] = (baggerIndex % 2 == 1);
                bagger['baggerId'] = encodeURIComponent(bagger.name);
            }
        }
    }
};
