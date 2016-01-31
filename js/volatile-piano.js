(function(window){
    
	'use strict';
    function define_library(){

        var VolatilePiano = {};
        var defaultSize = "10mm";
        VolatilePiano.test = function(){
            alert("Hello from piano.");
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
