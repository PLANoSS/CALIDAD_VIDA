
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
var format_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.format.GeoJSON();
var features_Seencuentrasatisfechoviviendoensuciudad_5 = format_Seencuentrasatisfechoviviendoensuciudad_5.readFeatures(json_Seencuentrasatisfechoviviendoensuciudad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentrasatisfechoviviendoensuciudad_5.addFeatures(features_Seencuentrasatisfechoviviendoensuciudad_5);var lyr_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentrasatisfechoviviendoensuciudad_5, 
                style: style_Seencuentrasatisfechoviviendoensuciudad_5,
    title: '<b/>Percepción sobre el vivir en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran muy de acuerdo en vivir en su ciudad.<br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentrasatisfechoviviendoensuciudad_5.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentrasatisfechoviviendoensuciudad_5];
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy de acu': 'Muy de acu', });
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy de acu': 'TextEdit', });
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Muy de acu': 'no label', });