
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
var format_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19 = format_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.readFeatures(json_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.addFeatures(features_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19);var lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19, 
                style: style_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19,
    title: '<b/>Percepción sobre los espacios físicos culturales:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los espacios físicos culturales como<br />librerías y museos.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19];
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
