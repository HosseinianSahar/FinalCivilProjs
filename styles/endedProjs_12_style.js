var size = 0;
var placement = 'point';

var style_endedProjs_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "18.2px \'B Mitra\', sans-serif";
    var labelFill = "#f63d0e";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.65;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("عنوان") !== null) {
        labelText = String(feature.get("عنوان"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 5.68332 + size, points: 5,
            radius2: 2.84166, stroke: new ol.style.Stroke({color: 'rgba(184,8,8,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,210,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.2 + size, points: 5,
            radius2: 3.1, stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,210,44,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
