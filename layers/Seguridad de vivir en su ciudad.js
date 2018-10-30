
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
var format_Algodeacuerdoconlaseguridaddevivirensuciudad_0 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlaseguridaddevivirensuciudad_0 = format_Algodeacuerdoconlaseguridaddevivirensuciudad_0.readFeatures(json_Algodeacuerdoconlaseguridaddevivirensuciudad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlaseguridaddevivirensuciudad_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlaseguridaddevivirensuciudad_0.addFeatures(features_Algodeacuerdoconlaseguridaddevivirensuciudad_0);var lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlaseguridaddevivirensuciudad_0, 
                style: style_Algodeacuerdoconlaseguridaddevivirensuciudad_0,
    title: '<b/>Percepción sobre la seguridad de su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo  con la seguridad de vivir en su ciudad.<br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridaddevivirensuciudad_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridaddevivirensuciudad_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridaddevivirensuciudad_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridaddevivirensuciudad_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridaddevivirensuciudad_0_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.setVisible(true)
var layersList = [baseLayer,lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0];
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Algo de ac': 'Algo de ac', '1_Grafica': '1_Grafica', });
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Algo de ac': 'Hidden', '1_Grafica': 'Photo', });
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', '1_Grafica': 'no label', });