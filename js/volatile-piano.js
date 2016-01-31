(function(window){
    
	'use strict';
    function define_library(){

        var VolatilePiano = {};
        var defaultSize = "10mm";
		var canvas;
        VolatilePiano.test = function(){
            alert("Hello from piano.");
        }
       
		VolatilePiano.setCanvas = function(c){
			this.canvas = c;
		}

		VolatilePiano.test = function(){
            alert("Hello from piano.");
        }

		VolatilePiano.redraw = function() {
			//TODO TU -- does not work
			//var ctx = canvas.getContext("2d");
			var ctx = this.canvas.getContext("2d");
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,150,75);
		}
        
		
		return VolatilePiano;
    }

    //define globally if it doesn't already exist
    if(typeof(VolatilePiano) === 'undefined'){
        console.log("Loading VolatilePiano library...");
        window.VolatilePiano = define_library();
    }
    else{
        console.log("VolatilePiano already defined.");
    }
})(window);
