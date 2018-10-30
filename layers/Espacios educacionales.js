
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
var format_Seencuentraalgosatisfechoconlosespacioseducacionales_21 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosespacioseducacionales_21 = format_Seencuentraalgosatisfechoconlosespacioseducacionales_21.readFeatures(json_Seencuentraalgosatisfechoconlosespacioseducacionales_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosespacioseducacionales_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosespacioseducacionales_21.addFeatures(features_Seencuentraalgosatisfechoconlosespacioseducacionales_21);var lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosespacioseducacionales_21, 
                style: style_Seencuentraalgosatisfechoconlosespacioseducacionales_21,
    title: '<b/>Percepción sobre los espacios educacionales:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con las escuelas y otros espacios<br />educacionales.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespacioseducacionales_21_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespacioseducacionales_21_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespacioseducacionales_21_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespacioseducacionales_21_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespacioseducacionales_21_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21];
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
