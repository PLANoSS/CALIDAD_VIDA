
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
var format_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = format_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.readFeatures(json_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.addFeatures(features_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4);var lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4, 
                style: style_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4,
    title: '<b/>Percepción sobre los extranjeros viviendo en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo con la integración de extranjeros que viven<br />en su ciudad.<br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.setVisible(true);
var layersList = [baseLayer,lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4];
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
