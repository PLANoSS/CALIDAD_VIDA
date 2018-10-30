
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
var format_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = format_Seencuentraalgosatisfechoconlosserviciosdesalud_17.readFeatures(json_Seencuentraalgosatisfechoconlosserviciosdesalud_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17.addFeatures(features_Seencuentraalgosatisfechoconlosserviciosdesalud_17);var lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17, 
                style: style_Seencuentraalgosatisfechoconlosserviciosdesalud_17,
    title: '<b/>Percepción sobre los servicios de salud:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los servicios de salud.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17];
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
