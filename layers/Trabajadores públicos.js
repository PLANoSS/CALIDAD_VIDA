
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
var format_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2 = format_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.readFeatures(json_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.addFeatures(features_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2);var lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2, 
                style: style_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2,
    title: '<b/>Percepción sobre los trabajadores públicos:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo  con la eficiencia de los trabadores<br />públicos.<br />\
    <img src="styles/legend/Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.setVisible(true);
var layersList = [baseLayer,lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2];
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Algo de ac': 'Algo de ac', '1_Grafica': '1_Grafica', });
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Algo de ac': 'Hidden', '1_Grafica': 'Photo', });
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', '1_Grafica': 'no label', });
