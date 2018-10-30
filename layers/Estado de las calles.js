
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelestadodelascalles_10 = format_Seencuentraalgosatisfechoconelestadodelascalles_10.readFeatures(json_Seencuentraalgosatisfechoconelestadodelascalles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10.addFeatures(features_Seencuentraalgosatisfechoconelestadodelascalles_10);var lyr_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10, 
                style: style_Seencuentraalgosatisfechoconelestadodelascalles_10,
    title: '<b/>Percepción sobre el estado de las calles:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el estado de las calles.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconelestadodelascalles_10];
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
