
import { Extension } from "qlik";


define( [ "qlik"
],
function (qlik):Extension {

	return {
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
