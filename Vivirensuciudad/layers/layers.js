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
var format_Satisfacciondevivirensuciudad_0 = new ol.format.GeoJSON();
var features_Satisfacciondevivirensuciudad_0 = format_Satisfacciondevivirensuciudad_0.readFeatures(json_Satisfacciondevivirensuciudad_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Satisfacciondevivirensuciudad_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Satisfacciondevivirensuciudad_0.addFeatures(features_Satisfacciondevivirensuciudad_0);var lyr_Satisfacciondevivirensuciudad_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Satisfacciondevivirensuciudad_0, 
                style: style_Satisfacciondevivirensuciudad_0,
    title: '<b/>Percepción sobre satisfacción de vivir en su ciudad:</b><br />El degradado de colores en el mapa indica el porcentaje de <br />personas que están <b/>muy de acuerdo</b> en vivir en su ciudad.<br /><br />\
    <img src="styles/legend/Satisfacciondevivirensuciudad_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Satisfacciondevivirensuciudad_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Satisfacciondevivirensuciudad_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Satisfacciondevivirensuciudad_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Satisfacciondevivirensuciudad_0_4.png" />  80 - 100 <br />'
        });

lyr_Satisfacciondevivirensuciudad_0.setVisible(true);
var layersList = [baseLayer,lyr_Satisfacciondevivirensuciudad_0];
lyr_Satisfacciondevivirensuciudad_0.set('fieldAliases', {'Codigo': 'Codigo', 'Canton': 'Canton', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Año': 'Año', 'Muy de acu': 'Muy de acu', });
lyr_Satisfacciondevivirensuciudad_0.set('fieldImages', {'Codigo': 'Hidden', 'Canton': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Año': 'TextEdit', 'Muy de acu': 'Hidden', });
lyr_Satisfacciondevivirensuciudad_0.set('fieldLabels', {'Canton': 'header label', 'Provincia': 'header label', 'Grafica': 'no label', 'Año': 'header label', });
lyr_Satisfacciondevivirensuciudad_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});