Template.imageryDrag.events({
  'dragover #imagery' : function(e, t) {
    e.preventDefault(); 
    $(e.currentTarget).addClass('dragover');
  },

  'dragleave #imagery' : function(e, t) {
    $(e.currentTarget).removeClass('dragover');
  },

  'drop #imagery' : function(e, t) {
    e.preventDefault();
    console.log('drop!');
  }

});