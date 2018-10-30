
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
var format_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.format.GeoJSON();
var features_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = format_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.readFeatures(json_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.addFeatures(features_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8);var lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8, 
                style: style_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8,
    title: '<b/>Percepción sobre la gente que vive en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo en que se puede confiar en las personas<br />que viven en su ciudad.<br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.setVisible(true);
var layersList = [baseLayer,lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8];
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
