var size = 0;
var placement = 'point';

var style_ImpProjs_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "20.8px \'B Mitra\', sans-serif";
    var labelFill = "#18110d";
    var bufferColor = "#fcb581";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 15.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 6.381818181818182 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(250,176,124,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
