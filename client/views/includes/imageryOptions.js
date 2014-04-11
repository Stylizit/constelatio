Template.imageryOptions.events({	
	'change .category': function(element){
		var $this = $(element.target);

		console.log('showing sub categories');
	    var c = $this.is(":checked");
	   
	    if(c){
	    	 //console.log("ohoh !");
	        $this.next().next('.checkbox-children').show(200);
	    }
	    else{
	        $this.next().next('.checkbox-children').hide(200);
	    }
	}
});