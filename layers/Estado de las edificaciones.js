
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
var format_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = format_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.readFeatures(json_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.addFeatures(features_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16);var lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16, 
                style: style_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16,
    title: '<b/>Percepción sobre el estado de las edificaciones de la ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el estado de las edificaciones en su<br />ciudad.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16];
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'CV26_Algo': 'CV26_Algo', });
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'CV26_Algo': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'CV26_Algo': 'no label', });
