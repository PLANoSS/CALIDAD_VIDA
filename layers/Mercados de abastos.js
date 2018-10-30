
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
var format_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13 = format_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.readFeatures(json_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.addFeatures(features_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13);var lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13, 
                style: style_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13,
    title: '<b/>Percepción sobre mercados de abastos y bodegas:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los mercados de abastos y bodegas.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13_4.png" />  80 - 100 <br />'
        });

lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.setVisible(true);
var layersList = [baseLayer,lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13];
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
