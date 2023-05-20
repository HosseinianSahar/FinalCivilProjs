ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32639").setExtent([634411.152102, 3268155.468898, 664274.195272, 3295899.850222]);
var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'نقشه خيابانهاي شيراز',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_satImages_1 = new ol.layer.Tile({
            'title': 'تصاوير ماهواره اي شيراز',
            'type': 'base',
            'opacity': 1.000000,
                       
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_MAHDOODE_2 = new ol.format.GeoJSON();
var features_MAHDOODE_2 = format_MAHDOODE_2.readFeatures(json_MAHDOODE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_MAHDOODE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAHDOODE_2.addFeatures(features_MAHDOODE_2);
var lyr_MAHDOODE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MAHDOODE_2, 
                style: style_MAHDOODE_2,
                interactive: false,
                title: '<img src="styles/legend/MAHDOODE_2.png" /> محدوده خدماتی شهر شیراز '
            });
var format_harim_3 = new ol.format.GeoJSON();
var features_harim_3 = format_harim_3.readFeatures(json_harim_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_harim_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_harim_3.addFeatures(features_harim_3);
var lyr_harim_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_harim_3, 
                style: style_harim_3,
                interactive: false,
                title: '<img src="styles/legend/harim_3.png" /> حریم شهر شیراز'
            });
var format_HarimAll_4 = new ol.format.GeoJSON();
var features_HarimAll_4 = format_HarimAll_4.readFeatures(json_HarimAll_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_HarimAll_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HarimAll_4.addFeatures(features_HarimAll_4);
var lyr_HarimAll_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HarimAll_4, 
                style: style_HarimAll_4,
                interactive: false,
                title: '<img src="styles/legend/HarimAll_4.png" /> لایه حرائم'
            });
var format_gosal012345_5 = new ol.format.GeoJSON();
var features_gosal012345_5 = format_gosal012345_5.readFeatures(json_gosal012345_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_gosal012345_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gosal012345_5.addFeatures(features_gosal012345_5);
var lyr_gosal012345_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gosal012345_5, 
                style: style_gosal012345_5,
                interactive: false,
                title: '<img src="styles/legend/gosal012345_5.png" /> لایه گسل'
            });
var format_Watercourse_L_6 = new ol.format.GeoJSON();
var features_Watercourse_L_6 = format_Watercourse_L_6.readFeatures(json_Watercourse_L_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_Watercourse_L_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watercourse_L_6.addFeatures(features_Watercourse_L_6);
var lyr_Watercourse_L_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Watercourse_L_6, 
                style: style_Watercourse_L_6,
                interactive: false,
                title: '<img src="styles/legend/Watercourse_L_6.png" /> لایه آبرو'
            });
var format_RIVER_7 = new ol.format.GeoJSON();
var features_RIVER_7 = format_RIVER_7.readFeatures(json_RIVER_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_RIVER_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIVER_7.addFeatures(features_RIVER_7);
var lyr_RIVER_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIVER_7, 
                style: style_RIVER_7,
                interactive: false,
                title: '<img src="styles/legend/RIVER_7.png" /> لایه رود'
            });
var format_Water_Well_P_8 = new ol.format.GeoJSON();
var features_Water_Well_P_8 = format_Water_Well_P_8.readFeatures(json_Water_Well_P_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_Water_Well_P_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Well_P_8.addFeatures(features_Water_Well_P_8);
var lyr_Water_Well_P_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Well_P_8, 
                style: style_Water_Well_P_8,
                interactive: false,
                title: '<img src="styles/legend/Water_Well_P_8.png" /> لایه چاه های آب'
            });
var format_Qanat_P_9 = new ol.format.GeoJSON();
var features_Qanat_P_9 = format_Qanat_P_9.readFeatures(json_Qanat_P_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_Qanat_P_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Qanat_P_9.addFeatures(features_Qanat_P_9);
var lyr_Qanat_P_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Qanat_P_9, 
                style: style_Qanat_P_9,
                interactive: false,
                title: '<img src="styles/legend/Qanat_P_9.png" /> لایه قنات'
            });
var format_Manhol_P_10 = new ol.format.GeoJSON();
var features_Manhol_P_10 = format_Manhol_P_10.readFeatures(json_Manhol_P_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_Manhol_P_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manhol_P_10.addFeatures(features_Manhol_P_10);
var lyr_Manhol_P_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manhol_P_10, 
                style: style_Manhol_P_10,
                interactive: false,
                title: '<img src="styles/legend/Manhol_P_10.png" /> لایه منهول'
            });
var format_designPlanRoad_11 = new ol.format.GeoJSON();
var features_designPlanRoad_11 = format_designPlanRoad_11.readFeatures(json_designPlanRoad_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_designPlanRoad_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_designPlanRoad_11.addFeatures(features_designPlanRoad_11);
var lyr_designPlanRoad_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_designPlanRoad_11, 
                style: style_designPlanRoad_11,
                interactive: true,
                title: '<img src="styles/legend/designPlanRoad_11.png" /> لایه طرح هندسی مسیر'
            });
var format_endedProjs_12 = new ol.format.GeoJSON();
var features_endedProjs_12 = format_endedProjs_12.readFeatures(json_endedProjs_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_endedProjs_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_endedProjs_12.addFeatures(features_endedProjs_12);
var lyr_endedProjs_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_endedProjs_12, 
                style: style_endedProjs_12,
                interactive: false,
                title: '<img src="styles/legend/endedProjs_12.png" /> لایه پروژه های اجرا شده'
            });
var format_ImpProjs_13 = new ol.format.GeoJSON();
var features_ImpProjs_13 = format_ImpProjs_13.readFeatures(json_ImpProjs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32639'});
var jsonSource_ImpProjs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImpProjs_13.addFeatures(features_ImpProjs_13);
var lyr_ImpProjs_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ImpProjs_13, 
                style: style_ImpProjs_13,
                interactive: true,
                title: '<img src="styles/legend/ImpProjs_13.png" /> لایه پروژه های در حال اجرا'
            });

lyr_OSM_0.setVisible(true);lyr_satImages_1.setVisible(true);lyr_MAHDOODE_2.setVisible(true);lyr_harim_3.setVisible(true);lyr_HarimAll_4.setVisible(true);lyr_gosal012345_5.setVisible(true);lyr_Watercourse_L_6.setVisible(true);lyr_RIVER_7.setVisible(true);lyr_Water_Well_P_8.setVisible(true);lyr_Qanat_P_9.setVisible(true);lyr_Manhol_P_10.setVisible(true);lyr_designPlanRoad_11.setVisible(true);lyr_endedProjs_12.setVisible(true);lyr_ImpProjs_13.setVisible(true);
var layersList = [lyr_OSM_0,lyr_satImages_1,lyr_MAHDOODE_2,lyr_harim_3,lyr_HarimAll_4,lyr_gosal012345_5,lyr_Watercourse_L_6,lyr_RIVER_7,lyr_Water_Well_P_8,lyr_Qanat_P_9,lyr_Manhol_P_10,lyr_designPlanRoad_11,lyr_endedProjs_12,lyr_ImpProjs_13];
lyr_MAHDOODE_2.set('fieldAliases', {'Region': 'Region', });
lyr_harim_3.set('fieldAliases', {'Region': 'Region', });
lyr_HarimAll_4.set('fieldAliases', {});
lyr_gosal012345_5.set('fieldAliases', {'f_type': 'f_type', });
lyr_Watercourse_L_6.set('fieldAliases', {});
lyr_RIVER_7.set('fieldAliases', {});
lyr_Water_Well_P_8.set('fieldAliases', {});
lyr_Qanat_P_9.set('fieldAliases', {});
lyr_Manhol_P_10.set('fieldAliases', {});
lyr_designPlanRoad_11.set('fieldAliases', {'layer': 'layer', });
lyr_endedProjs_12.set('fieldAliases', {'عنوان': 'عنوان', });
lyr_ImpProjs_13.set('fieldAliases', {'name': 'name', 'Detail': 'Detail', });
lyr_MAHDOODE_2.set('fieldImages', {'Region': '', });
lyr_harim_3.set('fieldImages', {'Region': 'TextEdit', });
lyr_HarimAll_4.set('fieldImages', {});
lyr_gosal012345_5.set('fieldImages', {'f_type': 'TextEdit', });
lyr_Watercourse_L_6.set('fieldImages', {});
lyr_RIVER_7.set('fieldImages', {});
lyr_Water_Well_P_8.set('fieldImages', {});
lyr_Qanat_P_9.set('fieldImages', {});
lyr_Manhol_P_10.set('fieldImages', {});
lyr_designPlanRoad_11.set('fieldImages', {'layer': 'TextEdit', });
lyr_endedProjs_12.set('fieldImages', {'عنوان': 'TextEdit', });
lyr_ImpProjs_13.set('fieldImages', {'name': 'TextEdit', 'Detail': 'ExternalResource', });
lyr_MAHDOODE_2.set('fieldLabels', {'Region': 'no label', });
lyr_harim_3.set('fieldLabels', {'Region': 'no label', });
lyr_HarimAll_4.set('fieldLabels', {});
lyr_gosal012345_5.set('fieldLabels', {'f_type': 'no label', });
lyr_Watercourse_L_6.set('fieldLabels', {});
lyr_RIVER_7.set('fieldLabels', {});
lyr_Water_Well_P_8.set('fieldLabels', {});
lyr_Qanat_P_9.set('fieldLabels', {});
lyr_Manhol_P_10.set('fieldLabels', {});
lyr_designPlanRoad_11.set('fieldLabels', {'layer': 'no label', });
lyr_endedProjs_12.set('fieldLabels', {'عنوان': 'no label', });
lyr_ImpProjs_13.set('fieldLabels', {'name': 'no label', 'Detail': 'no label', });
lyr_ImpProjs_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});