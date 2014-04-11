Template.searchBar.invokeAfterLoad = function(){
	Meteor.defer(function(){
		$('.advanced-search').hide();
	});
	return "";
};

Template.searchBar.events({
	/*
	*/
	
		'click #options': function(element){
			var advSearch = $('.advanced-search');
			var $this = $(element.target);

			if(advSearch.is(":hidden")){
		        $(advSearch).show(200);
		        if($this.hasClass("more-options") === true){
			        $this.removeClass("more-options").addClass("less-options").html("Less Options");
			    }
		    }
		    else{
		        $(advSearch).hide(200);
		        if($this.hasClass("more-options") === false){
		        	$this.removeClass("less-options").addClass("more-options").html("More Options");
				}
		    }
		},	

		
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

/*
$('.events-child-category-all').change( function(){
    $(this).parent().siblings().find(':checkbox').attr('checked', this.checked);
});
*/
/*
var advSearch = $('.advanced-search');
advSearch.hide();
$('more-options').click(function(){
	if(advSearch.is(":hidden")){
        $(advSearch).show(200);
        $(this).removeClass("more-options").addClass("less-options").html("Less Options");
    }
    else{
        $(advSearch).hide(200);
        $(this).removeClass("less-options").addClass("more-options").html("More Options");
    }
});
('.category').change(function(){
    console.log('showing sub categories');
    var c = this.checked;
    if(c){
        $(this).next('.checkbox-children').css('display', 'block');
    }
    else{
        $(this).next('.checkbox-children').css('display', 'none');
    }
});
*/