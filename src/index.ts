
import { Extension } from "qlik/index";

define( [ "qlik"],
function (qlik):Extension {

	return {
		initialProperties: {
      qHyperCubeDef: {}
    },
		definition: {
			type: 'items',
			component: 'accordion',
			items: {
				data: {
					uses: 'data'
				}
			}
		},
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element:JQuery) {
			//add your rendering code here
			$element.html( "basic" );
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );
