
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
var format_Seencuentraalgosatisfechoconeltransportepblico_18 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconeltransportepblico_18 = format_Seencuentraalgosatisfechoconeltransportepblico_18.readFeatures(json_Seencuentraalgosatisfechoconeltransportepblico_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconeltransportepblico_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconeltransportepblico_18.addFeatures(features_Seencuentraalgosatisfechoconeltransportepblico_18);var lyr_Seencuentraalgosatisfechoconeltransportepblico_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconeltransportepblico_18, 
                style: style_Seencuentraalgosatisfechoconeltransportepblico_18,
    title: '<b/>Percepción sobre el transporte público:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran muy satisfechos con el transporte público.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconeltransportepblico_18_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconeltransportepblico_18_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconeltransportepblico_18_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconeltransportepblico_18_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconeltransportepblico_18_4.png" />  80 - 100 <br /><br />'
        });

lyr_Seencuentraalgosatisfechoconeltransportepblico_18.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconeltransportepblico_18];
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
