
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
        });var format_Algodeacuerdoconlaseguridadensubarrio_1 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlaseguridadensubarrio_1 = format_Algodeacuerdoconlaseguridadensubarrio_1.readFeatures(json_Algodeacuerdoconlaseguridadensubarrio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlaseguridadensubarrio_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlaseguridadensubarrio_1.addFeatures(features_Algodeacuerdoconlaseguridadensubarrio_1);var lyr_Algodeacuerdoconlaseguridadensubarrio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlaseguridadensubarrio_1, 
                style: style_Algodeacuerdoconlaseguridadensubarrio_1,
    title: '<b/>Percepción sobre la seguridad en su barrio:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo  con la seguridad de vivir en su barrio.<br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridadensubarrio_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridadensubarrio_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridadensubarrio_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridadensubarrio_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlaseguridadensubarrio_1_4.png" />  80 - 100 <br /><br />'
        });var format_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2 = new ol.format.GeoJSON();
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
        });var format_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3 = format_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.readFeatures(json_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.addFeatures(features_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3);var lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3, 
                style: style_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3,
    title: '<b/>Percepción sobre el precio de alquiler de casas y departamentos:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo con que los precios de alquiler<br />de casas y departamentos son razonables.<br />\
    <img src="styles/legend/Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3_4.png" />  80 - 100 <br /><br />'
        });var format_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.format.GeoJSON();
var features_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = format_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.readFeatures(json_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.addFeatures(features_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4);var lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4, 
                style: style_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4,
    title: '<b/>Percepción sobre los extranjeros viviendo en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo con la integración de extranjeros que viven<br />en su ciudad.<br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.format.GeoJSON();
var features_Seencuentrasatisfechoviviendoensuciudad_5 = format_Seencuentrasatisfechoviviendoensuciudad_5.readFeatures(json_Seencuentrasatisfechoviviendoensuciudad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentrasatisfechoviviendoensuciudad_5.addFeatures(features_Seencuentrasatisfechoviviendoensuciudad_5);var lyr_Seencuentrasatisfechoviviendoensuciudad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentrasatisfechoviviendoensuciudad_5, 
                style: style_Seencuentrasatisfechoviviendoensuciudad_5,
    title: '<b/>Percepción sobre el vivir en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran muy de acuerdo en vivir en su ciudad.<br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentrasatisfechoviviendoensuciudad_5_4.png" />  80 - 100 <br /><br />'
        });var format_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6 = new ol.format.GeoJSON();
var features_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6 = format_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.readFeatures(json_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.addFeatures(features_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6);var lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6, 
                style: style_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6,
    title: '<b/>Percepción sobre el encontrar un empleo:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo en desacuerdo con la facilidad de encontrar<br />un empleo.<br />\
    <img src="styles/legend/Muyendesacuerdoconlafacilidaddeencontrarunempleo_6_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Muyendesacuerdoconlafacilidaddeencontrarunempleo_6_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Muyendesacuerdoconlafacilidaddeencontrarunempleo_6_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Muyendesacuerdoconlafacilidaddeencontrarunempleo_6_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Muyendesacuerdoconlafacilidaddeencontrarunempleo_6_4.png" />  80 - 100 <br /><br />'
        });var format_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7 = new ol.format.GeoJSON();
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
        });var format_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.format.GeoJSON();
var features_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = format_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.readFeatures(json_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.addFeatures(features_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8);var lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8, 
                style: style_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8,
    title: '<b/>Percepción sobre la gente que vive en su ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo de acuerdo en que se puede confiar en las personas<br />que viven en su ciudad.<br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8_4.png" />  80 - 100 <br /><br />'
        });var format_Algodeacuerdoenconfiarenlaadministracinpblica_9 = new ol.format.GeoJSON();
var features_Algodeacuerdoenconfiarenlaadministracinpblica_9 = format_Algodeacuerdoenconfiarenlaadministracinpblica_9.readFeatures(json_Algodeacuerdoenconfiarenlaadministracinpblica_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Algodeacuerdoenconfiarenlaadministracinpblica_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Algodeacuerdoenconfiarenlaadministracinpblica_9.addFeatures(features_Algodeacuerdoenconfiarenlaadministracinpblica_9);var lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Algodeacuerdoenconfiarenlaadministracinpblica_9, 
                style: style_Algodeacuerdoenconfiarenlaadministracinpblica_9,
    title: '<b/>Percepción sobre la administración pública:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con la administración pública.<br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlaadministracinpblica_9_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlaadministracinpblica_9_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlaadministracinpblica_9_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlaadministracinpblica_9_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Algodeacuerdoenconfiarenlaadministracinpblica_9_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelestadodelascalles_10 = format_Seencuentraalgosatisfechoconelestadodelascalles_10.readFeatures(json_Seencuentraalgosatisfechoconelestadodelascalles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10.addFeatures(features_Seencuentraalgosatisfechoconelestadodelascalles_10);var lyr_Seencuentraalgosatisfechoconelestadodelascalles_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelestadodelascalles_10, 
                style: style_Seencuentraalgosatisfechoconelestadodelascalles_10,
    title: '<b/>Percepción sobre el estado de las calles:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el estado de las calles.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelascalles_10_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconelnivelderuido_11 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelnivelderuido_11 = format_Seencuentraalgosatisfechoconelnivelderuido_11.readFeatures(json_Seencuentraalgosatisfechoconelnivelderuido_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelnivelderuido_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelnivelderuido_11.addFeatures(features_Seencuentraalgosatisfechoconelnivelderuido_11);var lyr_Seencuentraalgosatisfechoconelnivelderuido_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelnivelderuido_11, 
                style: style_Seencuentraalgosatisfechoconelnivelderuido_11,
    title: '<b/>Percepción sobre el nivel de ruido:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el nivel de ruido.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelnivelderuido_11_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelnivelderuido_11_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelnivelderuido_11_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelnivelderuido_11_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelnivelderuido_11_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconelserviciodeaseopblico_12 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelserviciodeaseopblico_12 = format_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.readFeatures(json_Seencuentraalgosatisfechoconelserviciodeaseopblico_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelserviciodeaseopblico_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.addFeatures(features_Seencuentraalgosatisfechoconelserviciodeaseopblico_12);var lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelserviciodeaseopblico_12, 
                style: style_Seencuentraalgosatisfechoconelserviciodeaseopblico_12,
    title: '<b/>Percepción sobre el servicio de aseo público:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el servicio de aseo público.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelserviciodeaseopblico_12_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelserviciodeaseopblico_12_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelserviciodeaseopblico_12_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelserviciodeaseopblico_12_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelserviciodeaseopblico_12_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlosespaciosverdes_14 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15 = format_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.readFeatures(json_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.addFeatures(features_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15);var lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15, 
                style: style_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15,
    title: '<b/>Percepción sobre los espacios públicos peatonales:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los espacios públicos peatonales<br />como mercados, plazas y aceras.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = format_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.readFeatures(json_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.addFeatures(features_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16);var lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16, 
                style: style_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16,
    title: '<b/>Percepción sobre el estado de las edificaciones de la ciudad:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con el estado de las edificaciones en su<br />ciudad.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = format_Seencuentraalgosatisfechoconlosserviciosdesalud_17.readFeatures(json_Seencuentraalgosatisfechoconlosserviciosdesalud_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17.addFeatures(features_Seencuentraalgosatisfechoconlosserviciosdesalud_17);var lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlosserviciosdesalud_17, 
                style: style_Seencuentraalgosatisfechoconlosserviciosdesalud_17,
    title: '<b/>Percepción sobre los servicios de salud:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con los servicios de salud.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlosserviciosdesalud_17_4.png" />  80 - 100 <br /><br />'
        });var format_Seencuentraalgosatisfechoconeltransportepblico_18 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlosespacioseducacionales_21 = new ol.format.GeoJSON();
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
        });var format_Seencuentraalgosatisfechoconlacalidaddeaire_22 = new ol.format.GeoJSON();
var features_Seencuentraalgosatisfechoconlacalidaddeaire_22 = format_Seencuentraalgosatisfechoconlacalidaddeaire_22.readFeatures(json_Seencuentraalgosatisfechoconlacalidaddeaire_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seencuentraalgosatisfechoconlacalidaddeaire_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Seencuentraalgosatisfechoconlacalidaddeaire_22.addFeatures(features_Seencuentraalgosatisfechoconlacalidaddeaire_22);var lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Seencuentraalgosatisfechoconlacalidaddeaire_22, 
                style: style_Seencuentraalgosatisfechoconlacalidaddeaire_22,
    title: '<b/>Percepción sobre la calidad del aire:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que se encuentran algo satisfechos con la calidad del aire.<br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlacalidaddeaire_22_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlacalidaddeaire_22_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlacalidaddeaire_22_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlacalidaddeaire_22_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Seencuentraalgosatisfechoconlacalidaddeaire_22_4.png" />  80 - 100 <br /><br />'
        });

lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.setVisible(false);lyr_Algodeacuerdoconlaseguridadensubarrio_1.setVisible(false);lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.setVisible(false);lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.setVisible(false);lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.setVisible(false);lyr_Seencuentrasatisfechoviviendoensuciudad_5.setVisible(false);lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.setVisible(false);lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.setVisible(false);lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.setVisible(false);lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9.setVisible(false);lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.setVisible(false);lyr_Seencuentraalgosatisfechoconelnivelderuido_11.setVisible(false);lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.setVisible(false);lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.setVisible(false);lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.setVisible(false);lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.setVisible(false);lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.setVisible(false);lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.setVisible(false);lyr_Seencuentraalgosatisfechoconeltransportepblico_18.setVisible(false);lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.setVisible(false);lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.setVisible(true);lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.setVisible(false);lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22.setVisible(false);
var layersList = [baseLayer,lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0,lyr_Algodeacuerdoconlaseguridadensubarrio_1,lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2,lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3,lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4,lyr_Seencuentrasatisfechoviviendoensuciudad_5,lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6,lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7,lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8,lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9,lyr_Seencuentraalgosatisfechoconelestadodelascalles_10,lyr_Seencuentraalgosatisfechoconelnivelderuido_11,lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12,lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13,lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14,lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15,lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16,lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17,lyr_Seencuentraalgosatisfechoconeltransportepblico_18,lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19,lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20,lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21,lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22];
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Algo de ac': 'Algo de ac', '1_Grafica': '1_Grafica', });
lyr_Algodeacuerdoconlaseguridadensubarrio_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Algo de ac': 'Algo de ac', '1_Grafica': '1_Grafica', });
lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy de acu': 'Muy de acu', });
lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Muy en des': 'Muy en des', });
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo de ac': 'Algo de ac', });
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconelnivelderuido_11.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'CV27_Algo': 'CV27_Algo', });
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'CV26_Algo': 'CV26_Algo', });
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Algo satis': 'Algo satis', });
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Algo de ac': 'Hidden', '1_Grafica': 'Photo', });
lyr_Algodeacuerdoconlaseguridadensubarrio_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Algo de ac': 'Hidden', '1_Grafica': 'Photo', });
lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy de acu': 'TextEdit', });
lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Muy en des': 'TextEdit', });
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo de ac': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelnivelderuido_11.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'CV27_Algo': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'CV26_Algo': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Algo satis': 'TextEdit', });
lyr_Algodeacuerdoconlaseguridaddevivirensuciudad_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', '1_Grafica': 'no label', });
lyr_Algodeacuerdoconlaseguridadensubarrio_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Algodeacuerdoconlaeficienciadelostrabajadorespblicos_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', '1_Grafica': 'no label', });
lyr_Algodeacuerdoconlospreciosdealquilerdecasasydepartamentos_3.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Algodeacuerdoconlaintegracindeextranjerosquevivenensuciudad_4.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Seencuentrasatisfechoviviendoensuciudad_5.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Muy de acu': 'no label', });
lyr_Muyendesacuerdoconlafacilidaddeencontrarunempleo_6.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Muy en des': 'no label', });
lyr_Algodeacuerdoenconfiarenlagentequeviveensubarrio_7.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Algodeacuerdoconquesepuedeconfiarenlaspersonasquevivenensuciudad_8.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Algodeacuerdoenconfiarenlaadministracinpblica_9.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo de ac': 'no label', });
lyr_Seencuentraalgosatisfechoconelestadodelascalles_10.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconelnivelderuido_11.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconelserviciodeaseopblico_12.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosmercadosdeabastosybodegas_13.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosespaciosverdes_14.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosespaciospblicospeatonales_15.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'CV27_Algo': 'no label', });
lyr_Seencuentraalgosatisfechoconelestadodelasedificacionesdelaciudad_16.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'CV26_Algo': 'no label', });
lyr_Seencuentraalgosatisfechoconlosserviciosdesalud_17.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconeltransportepblico_18.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosculturales_19.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosespaciosfsicosparaeldeporte_20.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlosespacioseducacionales_21.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'Algo satis': 'no label', });
lyr_Seencuentraalgosatisfechoconlacalidaddeaire_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});