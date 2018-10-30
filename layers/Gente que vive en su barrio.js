
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
var format_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7 = new ol.format.GeoJSON();
var features_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7 = format_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.readFeatures(json_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.addFeatures(features_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7);var lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7, 
                style: style_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7,
    title: '<b/>Percepción sobre la gente que vive en su barrio:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo con que se pueda confiar en las personas<br />que viven en su barrio.<br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlagentequeviveensubarrio_7_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlagentequeviveensubarrio_7_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlagentequeviveensubarrio_7_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlagentequeviveensubarrio_7_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlagentequeviveensubarrio_7_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.setVisible(true)
var layersList = [baseLayer,lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7];
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
