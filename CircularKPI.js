/*globals define*/
define( ["jquery", "text!./scripts/style.css", "./scripts/d3.min", "./scripts/radialProgress", "./scripts/themes"], function ( $, cssContent ) {
	'use strict';
	$( "<style>" ).html( cssContent ).appendTo( "head" );
	return {
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 1,
					qHeight: 1
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 0,
					max: 0
				},
				measures: {
					uses: "measures",
					min: 1,
					max: 1
				},
				sorting: {
					uses: "sorting"
				},
				settings: {
					uses: "settings",
					items:{
					  ThemeDropDown: {
							type: "string",
							component: "dropdown",
							label: "Theme",
							ref: "theme",
							options: chart_theme,
							defaultValue: 1
						},
						extras:{
							type: "items",
							label: "Extra Settings",
							items: {
							scrollaftermax: {
									type: "integer",
									label: "Animation time (ms)",
									ref: "animationtime",
									defaultValue: 1000
								}
							}
						}
					}
				}
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},
		paint: function ( $element, layout ) {
		
		
		var data = layout.qHyperCube.qDataPages[0].qMatrix[0][0].qNum;
		var label = layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
		

		
		var colors = [layout.theme[0], layout.theme[1], layout.theme[2]];
		var animationTime = layout.animationtime;
		
		var width = $element.width();
		var height = $element.height();
		
		
		var id = "container_" + layout.qInfo.qId;
		
		if(document.getElementById(id)) {
			$("#" + id).empty();
		}
		else {
			$element.append($('<div />').attr("id", id).attr("class", "viz").width(width).height(height));
		}
		
		viz(data, label, height, width, id, colors, animationTime);

		}
	};
} );

var viz = function(data, label, height, width, id, colors, animationTime) {

    var myDiv=d3.select(document.getElementById(id));

    start();

    function labelFunction(val,min,max) {
    }

    function start() {

	  	if(width<height) {
			height=width;
		}
		else {
			width=height;
		}

        var rp = radialProgress(document.getElementById(id), width, height, colors, animationTime)
                
                .diameter(width)
                .value(data*100)
                .render();

    }

}
