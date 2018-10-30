
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
var format_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20 = format_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.readFeatures(json_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.addFeatures(features_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20);var lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20, 
                style: style_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20,
    title: '<b/>Percepción sobre los espacios físicos para el deporte:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los espacios físicos para el deporte.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20];
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
