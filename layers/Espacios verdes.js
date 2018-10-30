
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
var format_Seencuentraalgosatisfechoconlosespaciosverdes_14 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosespaciosverdes_14 = format_Seencuentraalgosatisfechoconlosespaciosverdes_14.readFeatures(json_Seencuentraalgosatisfechoconlosespaciosverdes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosespaciosverdes_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosespaciosverdes_14.addFeatures(features_Seencuentraalgosatisfechoconlosespaciosverdes_14);var lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosespaciosverdes_14, 
                style: style_Seencuentraalgosatisfechoconlosespaciosverdes_14,
    title: '<b/>Percepción sobre los espacios verdes:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los espacios verdes.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosverdes_14_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosverdes_14_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosverdes_14_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosverdes_14_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosverdes_14_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14];
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
